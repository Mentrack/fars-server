import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { transformRateDtoToPrismaPayload } from './rate.transformer';

// Uses the global ValidationPipe's whitelist options from main.ts
const validateLikeApi = (cls: new () => object, body: object) =>
  validate(plainToInstance(cls, body), {
    whitelist: true,
    forbidNonWhitelisted: true,
  });

const period = { effectiveFrom: '2026-01-01', effectiveTo: '2026-12-31' };

describe('Rate DTOs', () => {
  it('accept camfRate, managementFeeRate, fees and a loan type', async () => {
    const errors = await validateLikeApi(UpdateRateDto, {
      camfRate: 1,
      managementFeeRate: 0.5,
      fees: [
        { name: 'Rate change management fee', rate: 1, ...period },
        { name: 'Legal fee', amount: 50000 },
      ],
      loanInterestRates: [
        { rate: 25, loanType: 'SHORT_TERM', ...period },
        { rate: 22, loanType: 'TERM', ...period },
      ],
    });

    expect(errors).toEqual([]);
  });

  it('rejects an unknown loan type', async () => {
    const errors = await validateLikeApi(UpdateRateDto, {
      loanInterestRates: [{ rate: 25, loanType: 'OVERNIGHT', ...period }],
    });

    expect(errors).not.toEqual([]);
  });

  it('still accepts a loan interest period without a loan type', async () => {
    const errors = await validateLikeApi(UpdateRateDto, {
      loanInterestRates: [{ rate: 25, ...period }],
    });

    expect(errors).toEqual([]);
  });

  it('requires a name on every fee', async () => {
    const errors = await validateLikeApi(UpdateRateDto, {
      fees: [{ rate: 1 }],
    });

    expect(errors).not.toEqual([]);
  });
});

describe('transformRateDtoToPrismaPayload', () => {
  it('copies camfRate, managementFeeRate and fees into the payload', () => {
    const fees = [{ name: 'Legal fee', amount: 50000 }];
    const payload = transformRateDtoToPrismaPayload({
      camfRate: 1,
      managementFeeRate: 0.5,
      fees,
    });

    expect(payload).toEqual(
      expect.objectContaining({ camfRate: 1, managementFeeRate: 0.5, fees }),
    );
  });

  it('keeps the loan type on loan interest periods', () => {
    const payload = transformRateDtoToPrismaPayload({
      loanInterestRates: [{ rate: 25, loanType: 'TERM', ...period }],
    } as CreateRateDto);

    expect(payload.loanInterestRates).toEqual([
      { rate: 25, loanType: 'TERM', ...period },
    ]);
  });
});
