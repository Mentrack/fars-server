import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { DatabaseService } from 'src/database/database.service';
import { transformRateDtoToPrismaPayload } from './rate.transformer';
import { UploadRateDocumentDto } from './dto/upload-rate-document.dto';
import { RateS3Service } from './rate.s3.service';
import { generateCode } from 'src/utils/create-code.util';
import { DocumentType, Prisma } from '@prisma/client';
import { UpdateRateDocumentDto } from './dto/update-rate-document.dto';

@Injectable()
export class RateService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly rateS3Service: RateS3Service,
  ) {}

  async create(createRateDto: CreateRateDto) {
    //Check if the client exists
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: createRateDto.clientId },
    });
    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    // Transform the rate type to json if it's not already

    const data = transformRateDtoToPrismaPayload(createRateDto);

    // Create a new account rate code
    let code: string;

    // Keep trying until we generate a code that doesn't exist
    while (true) {
      const candidate = generateCode('ARC');
      const existing = await this.databaseService.accountRate.findUnique({
        where: { code: candidate },
      });

      if (!existing) {
        code = candidate;
        break;
      }
    }

    // Create a new rate
    return await this.databaseService.accountRate.create({
      data: {
        ...data,
        clientId: createRateDto.clientId,
        code,
      },
      include: {
        client: true, // Include client details in the response
      },
    });
  }

  async findAll() {
    const rates = await this.databaseService.accountRate.findMany({
      select: {
        id: true,
        code: true,
        rateType: true,
        currency: true,
        effectiveFrom: true,
        effectiveTo: true,
        createdAt: true,
        updatedAt: true,
        client: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            companyName: true,
            email: true,
            avatarUrl: true,
          },
        }, // Include client details in the response
      },
    });

    // Check if there are any rates
    if (rates.length === 0) {
      throw new NotFoundException('No rates found');
    }

    // Return the list of rates
    return rates;
  }

  async findByClientId(clientId: string) {
    const rates = await this.databaseService.accountRate.findMany({
      where: { clientId },
      select: {
        id: true,
        code: true,
        rateType: true,
        currency: true,
        effectiveFrom: true,
        effectiveTo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Check if there are any rates for the client
    if (rates.length === 0) {
      throw new NotFoundException('No rates found for this client');
    }

    // Return the list of rates
    return rates;
  }

  async findDocumentById(id: string) {
    const document = await this.databaseService.document.findUnique({
      where: { id },
      include: {
        rates: {
          select: {
            id: true,
            clientId: true,
            code: true,
          },
        },
      },
    });

    // Check if the document exists
    if (!document) {
      throw new NotFoundException('Document not found');
    }

    // Assign the S3 URL to the document
    document.url = await this.rateS3Service.getFileUrl(document.url);

    // Return the document details
    return document;
  }

  async findOne(id: string) {
    const rate = await this.databaseService.accountRate.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
      },
    });

    // Check if the rate exists
    if (!rate) {
      throw new NotFoundException('Rate not found');
    }

    // Return the rate details
    return rate;
  }

  async update(id: string, updateRateDto: UpdateRateDto) {
    //Check if the rate exists
    const rateExist = await this.databaseService.accountRate.findUnique({
      where: { id },
    });
    if (!rateExist) {
      throw new NotFoundException('Rate not found');
    }

    // Transform the rate type to json if it's not already
    const data = transformRateDtoToPrismaPayload(updateRateDto);

    // Update the rate
    return await this.databaseService.accountRate.update({
      where: { id },
      data: { ...data },
      include: {
        client: true, // Include client details in the response
      },
    });
  }

  async remove(id: string) {
    // Check if the rate exists
    const rateExist = await this.databaseService.accountRate.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
      },
    });
    if (!rateExist) {
      throw new NotFoundException('Rate not found');
    }

    return await this.databaseService.accountRate.delete({
      where: { id },
    });
  }

  async uploadRateDocument(
    file: Express.Multer.File,
    uploadRateDocumentDto: UploadRateDocumentDto,
    uploaderId: string,
  ) {
    // Validate that all rate IDs exist
    for (const rateId of uploadRateDocumentDto.rateIds) {
      const rateExists = await this.databaseService.accountRate.findUnique({
        where: { id: rateId },
      });
      if (!rateExists) {
        throw new NotFoundException(`Rate with ID ${rateId} not found`);
      }
    }

    // Create a new document code
    let code: string;

    // Keep trying until we generate a code that doesn't exist
    while (true) {
      const candidate = generateCode('RDC');
      const existing = await this.databaseService.document.findUnique({
        where: { code: candidate },
      });

      if (!existing) {
        code = candidate;
        break;
      }
    }

    // Upload to S3
    const key = `contract-documents/${code.toLocaleLowerCase()}`;
    const fileUrl = await this.rateS3Service.uploadFile(file, key);
    if (!fileUrl) {
      throw new NotFoundException('File upload failed');
    }

    // Create document & link to rates
    const document = await this.databaseService.document.create({
      data: {
        code,
        title: uploadRateDocumentDto.title,
        url: fileUrl,
        type: DocumentType.CONTRACT,
        uploadedById: uploaderId,
        rates: {
          connect: uploadRateDocumentDto.rateIds.map((id) => ({ id })),
        },
      },
    });

    // Assign the S3 URL to the document
    document.url = await this.rateS3Service.getFileUrl(document.url);

    const documentWithRates = await this.databaseService.document.findUnique({
      where: { id: document.id },
      include: {
        rates: {
          select: {
            id: true,
            clientId: true,
            code: true,
          },
        },
      },
    });

    return { ...documentWithRates, url: document.url };
  }

  async updateRateDocument(
    id: string,
    file: Express.Multer.File,
    updateRateDocumentDto: UpdateRateDocumentDto,
  ) {
    // Check if the document exists
    const documentExists = await this.databaseService.document.findUnique({
      where: { id },
    });

    if (!documentExists) {
      throw new NotFoundException('Document not found');
    }

    // If a file is provided, upload it to S3
    let fileUrl: string | undefined;
    if (file) {
      const key = `contract-documents/${documentExists.code.toLocaleLowerCase()}`;
      fileUrl = await this.rateS3Service.uploadFile(file, key);
      if (!fileUrl) {
        throw new NotFoundException('File upload failed');
      }
    }

    const { title, rateIds } = updateRateDocumentDto;

    const data: Prisma.DocumentUpdateInput = {
      ...(title && { title }),
      ...(file && { url: fileUrl }), // Update URL only if file is provided
      ...(rateIds && {
        rates: {
          set: [], // disconnect all
          connect: rateIds.map((id) => ({ id })),
        },
      }),
    };

    const document = await this.databaseService.document.update({
      where: { id },
      data,
    });

    // Assign the S3 URL to the document
    document.url = await this.rateS3Service.getFileUrl(document.url);

    const documentWithRates = await this.databaseService.document.findUnique({
      where: { id: document.id },
      include: {
        rates: {
          select: {
            id: true,
            clientId: true,
            code: true,
          },
        },
      },
    });

    return { ...documentWithRates, url: document.url };
  }

  async findAllDocuments() {
    const documents = await this.databaseService.document.findMany({
      where: {
        type: DocumentType.CONTRACT,
      },
    });

    // Check if there are any documents
    if (documents.length === 0) {
      throw new NotFoundException('No documents found');
    }

    const assignDocumentUrl = documents.map(async (document) => {
      const url = await this.rateS3Service.getFileUrl(document.url);
      return { ...document, url };
    });

    // Return the list of documents
    return Promise.all(assignDocumentUrl);
  }

  async findAllRateDocuments(rateId: string) {
    const rate = await this.databaseService.accountRate.findUnique({
      where: { id: rateId },
      include: {
        documents: true,
      },
    });

    // Check if the rate exists
    if (!rate) {
      throw new NotFoundException('Rate not found');
    }

    const documents = await this.databaseService.document.findMany({
      where: {
        rates: {
          some: {
            id: rateId,
          },
        },
        type: DocumentType.CONTRACT,
      },
      include: {
        rates: {
          select: {
            id: true,
            clientId: true,
            code: true,
          },
        },
      },
    });

    // Check if there are any documents for the rate
    if (!documents || documents.length === 0) {
      throw new NotFoundException('No documents found for this rate');
    }

    const assignDocumentUrl = documents.map(async (document) => {
      const url = await this.rateS3Service.getFileUrl(document.url);
      return { ...document, url };
    });

    // Return the list of documents
    return Promise.all(assignDocumentUrl);
  }

  async deleteDocument(documentId: string) {
    // Check if the document exists
    const documentExists = await this.databaseService.document.findUnique({
      where: { id: documentId },
    });
    if (!documentExists) {
      throw new NotFoundException('Document not found');
    }
    // Delete the document from S3
    await this.rateS3Service.deleteFile(documentExists.url);

    // Delete the document from the database
    return await this.databaseService.document.delete({
      where: { id: documentId },
    });
  }
}
