import { ForbiddenException } from '@nestjs/common';
import { corsOptions } from './corsOptions';
import { allowedOrigins } from './allowed-origins.config';

type OriginFn = (
  origin: string | undefined,
  cb: (err: Error | null, allow?: boolean) => void,
) => void;

const originFn = corsOptions.origin as unknown as OriginFn;

describe('corsOptions.origin', () => {
  it('allows a listed origin', () => {
    const cb = jest.fn();
    originFn(allowedOrigins[0], cb);
    expect(cb).toHaveBeenCalledWith(null, true);
  });

  it('allows requests with no Origin header (curl, server-to-server)', () => {
    const cb = jest.fn();
    originFn(undefined, cb);
    expect(cb).toHaveBeenCalledWith(null, true);
  });

  it('rejects an unlisted origin with a 403 that names the origin', () => {
    const cb = jest.fn<void, [Error | null, boolean?]>();
    originFn('https://not-listed.example.com', cb);

    const err = cb.mock.calls[0][0];
    expect(err).toBeInstanceOf(ForbiddenException);
    expect((err as ForbiddenException).message).toContain(
      'https://not-listed.example.com',
    );
  });
});
