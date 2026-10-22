import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { DatabaseService } from 'src/database/database.service';
import { transformRateDtoToPrismaPayload } from './rate.transformer';
import { UploadRateDocumentDto } from './dto/upload-rate-document.dto';
import { RateStorageService } from './rate.storage.service';
import { generateCode } from 'src/utils/create-code.util';
import { DocumentType, Prisma } from '@prisma/client';
import { UpdateRateDocumentDto } from './dto/update-rate-document.dto';

@Injectable()
export class RateService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly rateStorageService: RateStorageService,
  ) {}

  private readonly logger = new Logger(RateService.name);

  // One missing storage object must not fail a whole document list;
  // that document is returned with url: null instead.
  private async signedUrlOrNull(key: string): Promise<string | null> {
    try {
      return await this.rateStorageService.getFileUrl(key);
    } catch (error) {
      this.logger.warn(
        `Could not sign document URL for "${key}": ${(error as Error).message}`,
      );
      return null;
    }
  }

  async create(createRateDto: CreateRateDto) {
    //Check if the client exists
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: createRateDto.clientId },
    });
    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    // Check if the bank exists
    const bankExists = await this.databaseService.bank.findUnique({
      where: { id: createRateDto.bankId },
    });
    if (!bankExists) {
      throw new NotFoundException('Bank not found');
    }

    // Transform the rate type to json if it's not already

    const data = transformRateDtoToPrismaPayload(createRateDto);

    // Create a new account rate code
    let code: string;

    // Keep trying until we generate a code that doesn't exist
    while (true) {
      const candidate = generateCode(
        `ARC-${bankExists.name.substring(0, 4).toUpperCase()}-${clientExists.firstName.substring(0, 4).toUpperCase()}`,
      );
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
        bankId: createRateDto.bankId,
        code,
      },
      include: {
        client: true, // Include client details in the response
        bank: true, // Include bank details in the response
      },
    });
  }

  async findAll() {
    // Return every rate field so the Rate Details view has the full contract
    const rates = await this.databaseService.accountRate.findMany({
      include: {
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
        bank: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        }, // Include bank details in the response
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
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: clientId },
    });
    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    const rates = await this.databaseService.accountRate.findMany({
      where: { clientId },
      include: {
        bank: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        }, // Include bank details in the response
      },
    });

    // Check if there are any rates for the client
    if (rates.length === 0) {
      throw new NotFoundException('No rates found for this client');
    }

    // Return the list of rates
    return rates;
  }

  async findByBankId(clientId: string, bankId: string) {
    // Check if the client exists
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: clientId },
    });
    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    // Check if the bank exists
    const bankExists = await this.databaseService.bank.findUnique({
      where: { id: bankId },
    });
    if (!bankExists) {
      throw new NotFoundException('Bank not found');
    }

    const rates = await this.databaseService.accountRate.findMany({
      where: { bankId, clientId },
    });

    // Check if there are any rates for the bank
    if (rates.length === 0) {
      throw new NotFoundException('No rates found for this bank');
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

    // Assign the storage URL to the document
    document.url = await this.rateStorageService.getFileUrl(document.url);

    // Return the document details
    return document;
  }

  async findOne(id: string) {
    const rate = await this.databaseService.accountRate.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
        bank: true, // Include bank details in the response
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
        bank: true, // Include bank details in the response
      },
    });
  }

  async remove(id: string) {
    // Check if the rate exists
    const rateExist = await this.databaseService.accountRate.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
        bank: true, // Include bank details in the response
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

    // Upload to storage
    const key = `contract-documents/${code.toLocaleLowerCase()}`;
    const fileUrl = await this.rateStorageService.uploadFile(file, key);
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

    // Assign the storage URL to the document
    document.url = await this.rateStorageService.getFileUrl(document.url);

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

    // If a file is provided, upload it to storage
    let fileUrl: string | undefined;
    if (file) {
      const key = `contract-documents/${documentExists.code.toLocaleLowerCase()}`;
      fileUrl = await this.rateStorageService.uploadFile(file, key);
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

    // Assign the storage URL to the document
    document.url = await this.rateStorageService.getFileUrl(document.url);

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
      include: {
        rates: {
          select: {
            bank: { select: { name: true } },
          },
        },
      },
    });

    // Check if there are any documents
    if (documents.length === 0) {
      throw new NotFoundException('No documents found');
    }

    const assignDocumentUrl = documents.map(async (document) => {
      const url = await this.signedUrlOrNull(document.url);
      const { rates, ...rest } = document;
      const bankNames = [
        ...new Set(rates.map((rate) => rate.bank.name).filter(Boolean)),
      ];
      return {
        ...rest,
        url,
        bankName: bankNames.length > 0 ? bankNames.join(', ') : null,
      };
    });

    // Return the list of documents
    return Promise.all(assignDocumentUrl);
  }

  async assignDocumentToRate(documentId: string, rateId: string) {
    // Check if the document exists
    const documentExists = await this.databaseService.document.findUnique({
      where: { id: documentId },
    });
    if (!documentExists) {
      throw new NotFoundException('Document not found');
    }

    // Check if the rate exists
    const rateExists = await this.databaseService.accountRate.findUnique({
      where: { id: rateId },
    });
    if (!rateExists) {
      throw new NotFoundException('Rate not found');
    }

    // Assign the document to the rate
    await this.databaseService.document.update({
      where: { id: documentId },
      data: {
        rates: {
          connect: { id: rateId },
        },
      },
    });

    // Return the updated list of documents for the rate
    const documents = await this.databaseService.document.findMany({
      where: {
        rates: {
          some: {
            id: rateId,
          },
        },
      },
    });

    const assignDocumentUrl = documents.map(async (document) => {
      const url = await this.signedUrlOrNull(document.url);
      return { ...document, url };
    });

    // Return the list of documents
    return Promise.all(assignDocumentUrl);
  }

  // Unassign a document from a rate
  async unassignDocumentFromRate(documentId: string, rateId: string) {
    // Check if the document exists
    const documentExists = await this.databaseService.document.findUnique({
      where: { id: documentId },
    });
    if (!documentExists) {
      throw new NotFoundException('Document not found');
    }

    // Check if the rate exists
    const rateExists = await this.databaseService.accountRate.findUnique({
      where: { id: rateId },
    });
    if (!rateExists) {
      throw new NotFoundException('Rate not found');
    }

    // Unassign the document from the rate
    await this.databaseService.document.update({
      where: { id: documentId },
      data: {
        rates: {
          disconnect: { id: rateId },
        },
      },
    });

    // Return the updated list of documents for the rate
    const documents = await this.databaseService.document.findMany({
      where: {
        rates: {
          some: {
            id: rateId,
          },
        },
      },
    });

    const assignDocumentUrl = documents.map(async (document) => {
      const url = await this.signedUrlOrNull(document.url);
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
      const url = await this.signedUrlOrNull(document.url);
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
    // Delete the document from storage
    await this.rateStorageService.deleteFile(documentExists.url);

    // Delete the document from the database
    return await this.databaseService.document.delete({
      where: { id: documentId },
    });
  }
}
