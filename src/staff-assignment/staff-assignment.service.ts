import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AssignStaffDto } from './dto/assign-staff.dto';
import { UnassignStaffDto } from './dto/unassign-staff.dto';
import { DatabaseService } from 'src/database/database.service';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class StaffAssignmentService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly mailService: MailService,
  ) {}

  async create(assignedBy: string, assignStaffDto: AssignStaffDto) {
    try {
      // Check if the user is already assigned to the account
      const existingAssignment =
        await this.databaseService.staffAccountAssignment.findFirst({
          where: {
            userId: assignStaffDto.userId,
            accountId: assignStaffDto.accountId,
          },
        });
      if (existingAssignment) {
        throw new ConflictException('User is already assigned to this account');
      }

      // Create the staff assignment
      await this.databaseService.staffAccountAssignment.create({
        data: {
          userId: assignStaffDto.userId,
          accountId: assignStaffDto.accountId,
          assignedById: assignedBy,
        },
      });

      // Fetch the user details for sending the email
      const assignmentDetails =
        await this.databaseService.staffAccountAssignment.findUnique({
          where: {
            userId_accountId: {
              userId: assignStaffDto.userId,
              accountId: assignStaffDto.accountId,
            },
          },
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
              },
            },
            bankAccount: {
              include: {
                client: {
                  select: {
                    companyName: true,
                  },
                },
              },
            },
          },
        });

      if (assignmentDetails) {
        await this.mailService.sendBankAccountAssignmentNotification(
          assignmentDetails.user.email,
          assignmentDetails.bankAccount.accountCode,
          assignmentDetails.user.firstName,
          assignmentDetails.bankAccount.client.companyName,
        );
      }

      return { message: 'Staff assigned successfully' };
    } catch (error) {
      // Handle the case where the assignment already exists
      if (error.code === 'P2002') {
        throw new ConflictException('Staff already assigned to this account');
      } else if (error.code === 'P2003') {
        throw new NotFoundException('Bank account or user not found');
      }
      // Handle other potential errors
      throw new BadRequestException(
        'An error occurred while assigning staff to the bank account',
      );
    }
  }

  async findAll() {
    const staffAssignedToBankAccount =
      await this.databaseService.staffAccountAssignment.findMany({
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          bankAccount: {
            select: {
              id: true,
              accountName: true,
              accountNumber: true,
              accountType: true,
              clientId: true,
            },
          },
        },
      });

    if (
      !staffAssignedToBankAccount ||
      staffAssignedToBankAccount.length === 0
    ) {
      throw new NotFoundException('No staff assignments found');
    }

    return staffAssignedToBankAccount.map((assignment) => ({
      id: assignment.id,
      user: {
        id: assignment.user.id,
        firstName: assignment.user.firstName,
        lastName: assignment.user.lastName,
        email: assignment.user.email,
      },
      bankAccount: {
        id: assignment.bankAccount.id,
        accountName: assignment.bankAccount.accountName,
        accountNumber: assignment.bankAccount.accountNumber,
        accountType: assignment.bankAccount.accountType,
        clientId: assignment.bankAccount.clientId,
      },
    }));
  }

  async findStaffAssignedToBankAccount(accountId: string) {
    const staffAssignedToBankAccount =
      await this.databaseService.staffAccountAssignment.findMany({
        where: {
          accountId,
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

    if (
      !staffAssignedToBankAccount ||
      staffAssignedToBankAccount.length === 0
    ) {
      throw new NotFoundException('No staff assigned to this bank account');
    }

    return staffAssignedToBankAccount.map((assignment) => ({
      id: assignment.user.id,
      firstName: assignment.user.firstName,
      lastName: assignment.user.lastName,
      email: assignment.user.email,
    }));
  }

  async findBankAccountsAssignedToStaff(staffId: string) {
    const bankAccountsAssignedToStaff =
      await this.databaseService.staffAccountAssignment.findMany({
        where: {
          userId: staffId,
        },
        include: {
          bankAccount: {
            select: {
              id: true,
              accountName: true,
              accountNumber: true,
              accountType: true,
              clientId: true,
            },
          },
        },
      });

    if (
      !bankAccountsAssignedToStaff ||
      bankAccountsAssignedToStaff.length === 0
    ) {
      throw new NotFoundException('No bank account assigned to this staff');
    }

    return bankAccountsAssignedToStaff.map((assignment) => ({
      id: assignment.bankAccount.id,
      firstName: assignment.bankAccount.accountName,
      lastName: assignment.bankAccount.accountNumber,
      email: assignment.bankAccount.accountType,
      clientId: assignment.bankAccount.clientId,
    }));
  }

  async remove(userId: string, unassignStaffDto: UnassignStaffDto) {
    try {
      await this.databaseService.staffAccountAssignment.delete({
        where: {
          userId_accountId: {
            userId,
            accountId: unassignStaffDto.accountId,
          },
        },
      });

      return { message: 'Staff unassigned successfully' };
    } catch (error) {
      // Handle the case where the assignment does not exist
      if (error.code === 'P2025') {
        throw new NotFoundException('Staff assignment not found');
      }
      // Handle other potential errors
      throw new BadRequestException(
        'An error occurred while unassigning staff',
      );
    }
  }
}
