import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { StaffAssignmentService } from './staff-assignment.service';
import { AssignStaffDto, AssignStaffResponseDto } from './dto/assign-staff.dto';
import {
  UnassignStaffDto,
  UnassignStaffResponseDto,
} from './dto/unassign-staff.dto';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  GetAllAssignmentsResponseDto,
  GetAllBankAccountsAssignedToStaffResponseDto,
  GetAllStaffAssignedToBankAccountResponseDto,
} from './dto/get-assignments.tdo';

@ApiBearerAuth()
@ApiTags('Staff Assignments') // Group endpoints in Swagger UI
@Controller('staff-assignments')
export class StaffAssignmentController {
  constructor(
    private readonly staffAssignmentService: StaffAssignmentService,
  ) {}

  @ApiOperation({ summary: 'Assign staff to a bank account' })
  @ApiOkResponse({
    description: 'Staff assigned successfully',
    type: AssignStaffResponseDto,
  })
  @Post()
  async create(
    @Request() req: RequestWithUser,
    @Body() assignStaffDto: AssignStaffDto,
  ) {
    return await this.staffAssignmentService.create(
      req.user.id,
      assignStaffDto,
    );
  }

  @ApiOperation({ summary: 'Get all staff assignments' })
  @ApiOkResponse({
    description: 'List of all staff assignments',
    type: [GetAllAssignmentsResponseDto],
  })
  @Get()
  async findAll() {
    return await this.staffAssignmentService.findAll();
  }

  @ApiOperation({ summary: 'Get staff assigned to a specific bank account' })
  @ApiParam({ description: 'The ID of the bank account', name: 'id' })
  @ApiOkResponse({
    description: 'List of staff assigned to the bank account',
    type: [GetAllStaffAssignedToBankAccountResponseDto],
  })
  @Get('bank-account/:id')
  async findStaffAssignedToBankAccount(
    @Param('id', ParseUUIDPipe) accountId: string,
  ) {
    return await this.staffAssignmentService.findStaffAssignedToBankAccount(
      accountId,
    );
  }

  @ApiOperation({ summary: 'Get bank accounts assigned to a specific staff' })
  @ApiParam({ description: 'The ID of the staff', name: 'id' })
  @ApiOkResponse({
    description: 'List of bank accounts assigned to the staff',
    type: [GetAllBankAccountsAssignedToStaffResponseDto],
  })
  @Get('staff/:id')
  async findBankAccountsAssignedToStaff(
    @Param('id', ParseUUIDPipe) staffId: string,
  ) {
    return await this.staffAssignmentService.findBankAccountsAssignedToStaff(
      staffId,
    );
  }

  @ApiOperation({ summary: 'Unassign staff from a bank account' })
  @ApiParam({ description: 'The ID of the user to unassign', name: 'id' })
  @ApiOkResponse({
    description: 'Staff unassigned successfully',
    type: UnassignStaffResponseDto,
  })
  @Delete(':id')
  async remove(
    @Param('id', ParseUUIDPipe) userId: string,
    @Body() unassignStaffDto: UnassignStaffDto,
  ) {
    return await this.staffAssignmentService.remove(userId, unassignStaffDto);
  }
}
