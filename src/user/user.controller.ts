import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from './enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { GetUsersQueryDto } from './dto/get-users-query.dto';
import { UserParamDto } from './dto/user-param.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: CreateUserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Create user failed',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'Fetch all users successfully',
    type: [CreateUserResponseDto],
  })
  @ApiBadRequestResponse({
    description: 'Fetch users failed',
  })
  findAll(@Query() query: GetUsersQueryDto) {
    return this.userService.findAll(query.role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiOkResponse({
    description: 'Fetch user successfully',
    type: CreateUserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Fetch user failed',
  })
  findOne(@Param() param: UserParamDto) {
    return this.userService.findOne(param.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiOkResponse({
    description: 'User updated successfully',
    type: CreateUserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Update user failed',
  })
  update(@Param() param: UserParamDto, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(param.id, updateUserDto);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiOkResponse({
    description: 'User deleted successfully',
    type: CreateUserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Delete user failed',
  })
  @Delete('id')
  remove(@Param() param: UserParamDto) {
    return this.userService.remove(param.id);
  }
}
