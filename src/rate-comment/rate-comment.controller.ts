import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  ParseUUIDPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { RateCommentService } from './rate-comment.service';
import {
  CreateRateCommentDto,
  RateCommentResponse,
} from './dto/create-rate-comment.dto';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import { UpdateRateCommentDto } from './dto/update-rate-comment.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Role } from 'src/user/enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiBearerAuth()
@ApiTags('Rate Comments') // Group endpoints in Swagger UI
@Controller('rates/:rateId/comments')
export class RateCommentController {
  constructor(private readonly rateCommentService: RateCommentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new comment for a specific rate' })
  @ApiParam({
    name: 'rateId',
    description: 'UUID of the rate to comment on',
    type: 'string',
    format: 'uuid',
  })
  @ApiBody({ type: CreateRateCommentDto })
  @ApiCreatedResponse({
    description: 'The comment has been successfully created.',
    type: RateCommentResponse,
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiNotFoundResponse({ description: 'Rate not found.' })
  create(
    @Param('rateId', ParseUUIDPipe) rateId: string,
    @Body() createRateCommentDto: CreateRateCommentDto,
    @Request() req: RequestWithUser,
  ) {
    return this.rateCommentService.create(
      req.user.id,
      rateId,
      createRateCommentDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all comments for a specific rate' })
  @ApiParam({
    name: 'rateId',
    description: 'UUID of the rate to retrieve comments from',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'List of comments for the rate.',
    type: [RateCommentResponse], // Array of the response structure
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  findAll(@Param('rateId', ParseUUIDPipe) rateId: string) {
    return this.rateCommentService.findAll(rateId);
  }

  @Get('/:commentId')
  @ApiOperation({ summary: 'Retrieve a single comment for a specific rate' })
  @ApiParam({
    name: 'rateId',
    description: 'UUID of the rate the comment belongs to',
    type: 'string',
    format: 'uuid',
  })
  @ApiParam({
    name: 'commentId',
    description: 'UUID of the comment to retrieve',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'The found comment object.',
    type: RateCommentResponse,
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiNotFoundResponse({ description: 'Rate or Comment not found.' })
  findOne(
    @Param('rateId', ParseUUIDPipe) rateId: string,
    @Param('commentId', ParseUUIDPipe) commentId: string,
  ) {
    return this.rateCommentService.findOne(rateId, commentId);
  }

  @Patch(':commentId')
  @ApiOperation({ summary: 'Update an existing comment' })
  @ApiParam({
    name: 'rateId',
    description: 'UUID of the rate the comment belongs to',
    type: 'string',
    format: 'uuid',
  })
  @ApiParam({
    name: 'commentId',
    description: 'UUID of the comment to update',
    type: 'string',
    format: 'uuid',
  })
  @ApiBody({ type: UpdateRateCommentDto })
  @ApiOkResponse({
    description: 'The comment has been successfully updated.',
    type: RateCommentResponse,
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. User is not the owner.',
  })
  @ApiNotFoundResponse({ description: 'Rate or Comment not found.' })
  update(
    @Param('rateId', ParseUUIDPipe) rateId: string,
    @Param('commentId', ParseUUIDPipe) commentId: string,
    @Body() updateRateCommentDto: UpdateRateCommentDto,
    @Request() req: RequestWithUser,
  ) {
    return this.rateCommentService.update(
      req.user,
      rateId,
      commentId,
      updateRateCommentDto,
    );
  }

  @Delete(':commentId')
  @ApiOperation({ summary: 'Delete a comment' })
  @ApiParam({
    name: 'rateId',
    description: 'UUID of the rate the comment belongs to',
    type: 'string',
    format: 'uuid',
  })
  @ApiParam({
    name: 'commentId',
    description: 'UUID of the comment to delete',
    type: 'string',
    format: 'uuid',
  })
  @ApiNoContentResponse({
    description: 'The comment has been successfully deleted.',
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiForbiddenResponse({
    description: 'Forbidden. User is not the owner.',
  })
  @ApiNotFoundResponse({ description: 'Rate or Comment not found.' })
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  remove(
    @Param('rateId', ParseUUIDPipe) rateId: string,
    @Param('commentId', ParseUUIDPipe) commentId: string,
  ) {
    return this.rateCommentService.remove(rateId, commentId);
  }
}
