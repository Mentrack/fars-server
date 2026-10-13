import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MyLoggerService } from './my-logger/my-logger.service';
import { Request, Response } from 'express';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new MyLoggerService(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const myResponseObject = {
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      response: 'Internal Server Error',
    };

    if (exception instanceof HttpException) {
      myResponseObject.statusCode = exception.getStatus();
      myResponseObject.response = exception.getResponse() as string;
    } else if (exception instanceof PrismaClientValidationError) {
      myResponseObject.statusCode = 422;
      myResponseObject.response = exception.message.replaceAll(/\n/g, ' ');
    } else {
      myResponseObject.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      myResponseObject.response = 'Internal Server Error';
    }

    // Send the error response
    response.status(myResponseObject.statusCode).json(myResponseObject);

    const detail =
      typeof myResponseObject.response === 'string'
        ? myResponseObject.response
        : JSON.stringify(myResponseObject.response);
    const line = `${request.method} ${request.url} ${myResponseObject.statusCode} ${detail}`;
    if (myResponseObject.statusCode >= 500) {
      this.logger.error(line, AllExceptionsFilter.name);
    } else {
      this.logger.warn(line, AllExceptionsFilter.name);
    }

    super.catch(exception, host);
  }
}
