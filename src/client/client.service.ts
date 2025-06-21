import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DatabaseService } from 'src/database/database.service';
import { generateCode } from 'src/utils/create-code.util';
import { UserRole } from '@prisma/client';
import * as argon2 from 'argon2';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ClientService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly mailService: MailService,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const { email, companyName, firstName, lastName, phone } = createClientDto;

    // 1️⃣ Check if client OR user with same email or companyName exists
    const [clientExist, userExist] = await this.databaseService.$transaction([
      this.databaseService.client.findFirst({
        where: {
          OR: [{ email }, { companyName }],
        },
      }),
      this.databaseService.user.findUnique({
        where: { email },
      }),
    ]);

    if (clientExist) {
      throw new ConflictException('Client already exists');
    }

    if (userExist) {
      throw new ConflictException('User with this email already exists');
    }

    // Create a new user name
    let username: string;

    // Keep trying until we generate a username that doesn't exist
    while (true) {
      const candidate = generateCode('CL'); // Generate a candidate username
      const existing = await this.databaseService.user.findUnique({
        where: { username: candidate },
      });

      if (!existing) {
        username = candidate;
        break;
      }
    }

    const password = `@i${firstName}${new Date().getFullYear()}`; // Example password generation
    const hashedPassword = await argon2.hash(password); // Hash the password

    // 2️⃣ Create both Client and User atomically
    const [client, user] = await this.databaseService.$transaction([
      this.databaseService.client.create({
        data: createClientDto, // Directly use DTO for client creation
      }),
      this.databaseService.user.create({
        data: {
          email,
          firstName,
          lastName,
          phone,
          username: username, // Unique username
          password: hashedPassword, // Use the hashed password
          role: UserRole.CLIENT, // Set the role to CLIENT
        },
      }),
    ]);

    // If the client is created successfully, send a welcome email
    await this.mailService.sendAccountCreationEmail(
      user.email,
      user.firstName,
      user.email,
      password,
    );

    return client;
  }

  async findAll() {
    return await this.databaseService.client.findMany({});
  }

  async findOne(id: string) {
    try {
      const client = await this.databaseService.client.findUnique({
        where: { id },
      });

      // Handle not found case
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }

      return client;
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`Client not found`);
      }

      throw error;
    }
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    try {
      return await this.databaseService.client.update({
        where: { id },
        data: updateClientDto,
      });
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2002') {
        throw new ConflictException('Client already exists');
      }
      if (error.code === 'P2016') {
        throw new NotFoundException('Record to update not found.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }
      // Handle other errors
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const client = await this.databaseService.client.delete({
        where: { id },
      });

      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`Client not found`);
      }
      // Handle other errors
      throw error;
    }
  }
}
