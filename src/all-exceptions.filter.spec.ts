import {
  ArgumentsHost,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { MyLoggerService } from './my-logger/my-logger.service';

function makeHost(method = 'POST', url = '/api/transactions/abc/upload') {
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const request = { method, url };
  const host = {
    switchToHttp: () => ({
      getResponse: () => response,
      getRequest: () => request,
    }),
    getArgByIndex: (i: number) => [request, response][i],
  } as unknown as ArgumentsHost;
  return { host, response };
}

describe('AllExceptionsFilter', () => {
  const adapter = {
    isHeadersSent: () => true,
    end: jest.fn(),
    reply: jest.fn(),
  } as unknown as AbstractHttpAdapter;

  let errorSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;
  const messages = (spy: jest.SpyInstance) =>
    (spy.mock.calls as unknown[][]).map((c) => String(c[0])).join('\n');

  beforeEach(() => {
    errorSpy = jest
      .spyOn(MyLoggerService.prototype, 'error')
      .mockImplementation(() => undefined);
    warnSpy = jest
      .spyOn(MyLoggerService.prototype, 'warn')
      .mockImplementation(() => undefined);
  });

  afterEach(() => jest.restoreAllMocks());

  it('logs the details of an object-shaped HttpException instead of [object Object]', () => {
    const { host } = makeHost();
    new AllExceptionsFilter(adapter).catch(
      new BadRequestException(['file must be a CSV']),
      host,
    );

    const logged = messages(warnSpy);
    expect(logged).not.toContain('[object Object]');
    expect(logged).toContain('POST /api/transactions/abc/upload 400');
    expect(logged).toContain('file must be a CSV');
  });

  it('logs 4xx as a warning, not an error', () => {
    const { host } = makeHost('GET', '/api/user/me');
    new AllExceptionsFilter(adapter).catch(new UnauthorizedException(), host);

    expect(warnSpy).toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('logs unknown errors as an error with status 500', () => {
    const { host, response } = makeHost();
    new AllExceptionsFilter(adapter).catch(new Error('boom'), host);

    expect(response.status).toHaveBeenCalledWith(500);
    const logged = messages(errorSpy);
    expect(logged).toContain('POST /api/transactions/abc/upload 500');
  });
});
