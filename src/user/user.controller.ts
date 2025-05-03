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
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { GetUsersQueryDto } from './dto/get-users-query.dto';

@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: CreateUserResponseDto,
  })
  @Post('/')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'Fetch all users successfully',
    type: [CreateUserResponseDto],
  })
  @Get('/')
  findAll(@Query() query: GetUsersQueryDto) {
    return this.userService.findAll(query.role);
  }

  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({
    description: 'Fetch user successfully',
    type: CreateUserResponseDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiOkResponse({
    description: 'User updated successfully',
    type: CreateUserResponseDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiOkResponse({
    description: 'User deleted successfully',
    type: CreateUserResponseDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
