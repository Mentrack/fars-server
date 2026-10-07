import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRateCommentDto } from './dto/create-rate-comment.dto';
import { UpdateRateCommentDto } from './dto/update-rate-comment.dto';
import { DatabaseService } from 'src/database/database.service';
import { RequestWithUser } from 'src/auth/types/request-with-user';

@Injectable()
export class RateCommentService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    userId: string,
    rateId: string,
    createRateCommentDto: CreateRateCommentDto,
  ) {
    const { content } = createRateCommentDto;

    const rate = await this.databaseService.accountRate.findUnique({
      where: { id: rateId },
    });

    if (!rate) throw new NotFoundException('Rate not found');

    return await this.databaseService.rateComment.create({
      data: {
        accountRateId: rateId,
        content,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
            username: true,
          },
        },
        accountRate: { select: { id: true, code: true } },
      },
    });
  }

  async findAll(rateId: string) {
    const comments = await this.databaseService.rateComment.findMany({
      where: { accountRateId: rateId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
            username: true,
          },
        },
        accountRate: { select: { id: true, code: true } },
      },
    });

    if (!comments || comments.length === 0)
      throw new NotFoundException('No comments found for this rate');

    return comments;
  }

  async findOne(rateId: string, commentId: string) {
    const comment = await this.databaseService.rateComment.findUnique({
      where: { id: commentId, accountRateId: rateId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
            username: true,
          },
        },
        accountRate: { select: { id: true, code: true } },
      },
    });

    if (!comment) throw new NotFoundException('Rate comment not found');

    return comment;
  }

  async update(
    user: { id: string; role: string },
    rateId: string,
    commentId: string,
    updateRateCommentDto: UpdateRateCommentDto,
  ) {
    const { content } = updateRateCommentDto;
    const { id: userId, role: userRole } = user;

    const comment = await this.databaseService.rateComment.findUnique({
      where: { id: commentId, accountRateId: rateId },
    });

    if (!comment) throw new NotFoundException('Rate comment not found');

    // Authorized roles
    const authorizedRoles = ['ADMIN', 'SUPER_ADMIN'];

    // Check if the user is an authorized admin
    const isAdmin = authorizedRoles.includes(userRole);

    // Check if the user is the owner
    const isOwner = comment.userId === userId;

    // Deny access if the user is neither an admin NOR the owner
    if (!isAdmin && !isOwner) {
      throw new ForbiddenException(
        'You are not authorized to update this comment. Only the owner or an administrator can update it.',
      );
    }

    // Authorized: proceed with update

    return await this.databaseService.rateComment.update({
      where: { id: commentId },
      data: { content },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
            username: true,
          },
        },
        accountRate: { select: { id: true, code: true } },
      },
    });
  }
  async remove(rateId: string, commentId: string) {
    const comment = await this.databaseService.rateComment.findUnique({
      where: { id: commentId, accountRateId: rateId },
    });

    if (!comment) throw new NotFoundException('Rate comment not found');

    return await this.databaseService.rateComment.delete({
      where: { id: commentId },
    });
  }
}
