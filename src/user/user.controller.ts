import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
  Ip,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from './enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import {
  DeactivateUserDto,
  DeactivateUserResponseDto,
} from './dto/deactivate-user.dto';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import { ActivateUserResponseDto } from './dto/activate-user.dto';
import { EmailValidationPipe } from './pipe/email-validation.pipe';

@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly logger = new MyLoggerService(UserController.name);

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: CreateUserResponseDto,
  })
  @Post('/')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'Fetch all users successfully',
    type: [CreateUserResponseDto],
  })
  @Get('/')
  async findAll(@Ip() ip: string, @Query('role') role?: Role) {
    this.logger.log(`Request for All Users\t${ip}`, UserController.name);
    return await this.userService.findAll(role);
  }

  @Get('/check-email')
  @ApiOperation({ summary: 'Check if email is already in use' })
  @ApiOkResponse({
    description: 'Email is available',
  })
  async checkEmail(@Query('email', EmailValidationPipe) email: string) {
    return await this.userService.checkEmail(email);
  }

  @Get('/check-username')
  @ApiOperation({ summary: 'Check if username is already in use' })
  @ApiOkResponse({
    description: 'Username is available',
  })
  async checkUsername(@Query('username') username: string) {
    return await this.userService.checkUsername(username);
  }

  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    description: 'Fetch user successfully',
    type: CreateUserResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Deactivate a user by ID' })
  @ApiOkResponse({
    description: 'User deactivated successfully',
    type: DeactivateUserResponseDto,
  })
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Patch('deactivate/:id')
  async deactivateUser(
    @Request() req: RequestWithUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() deactivateUserDto: DeactivateUserDto,
  ) {
    return await this.userService.deactivateUser(
      req.user.id,
      id,
      deactivateUserDto,
    );
  }

  @ApiOperation({ summary: 'Reactivate a user by ID' })
  @ApiOkResponse({
    description: 'User reactivated successfully',
    type: ActivateUserResponseDto,
  })
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Patch('activate/:id')
  async activateUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.activateUser(id);
  }

  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiOkResponse({
    description: 'User updated successfully',
    type: CreateUserResponseDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update(id, updateUserDto);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiOkResponse({
    description: 'User deleted successfully',
    type: CreateUserResponseDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.remove(id);
  }
}
