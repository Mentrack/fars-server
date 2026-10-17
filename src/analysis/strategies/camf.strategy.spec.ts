import { CamfAnalyzer } from './camf.strategy';
import { DatabaseService } from 'src/database/database.service';

describe('CamfAnalyzer', () => {
  it('charges turnover with camfRate, not debitRate', async () => {
    const camfId = 'class-camf';
    const vcId = 'class-vc';
    const etId = 'class-et';
    const cwId = 'class-cw';
    const accountId = 'acct-1';

    const db = {
      transactionClassification: {
        findMany: jest.fn().mockResolvedValue([
          { id: camfId, code: 'CAMF' },
          { id: vcId, code: 'VC' },
          { id: etId, code: 'ET' },
          { id: cwId, code: 'CW' },
        ]),
      },
      bankAccount: {
        findUnique: jest.fn().mockResolvedValue({
          id: accountId,
          accountName: 'MOCK CAMF CURRENT',
          rate: {
            camfRate: 1,
            debitRate: 5,
            vatRate: 7.5,
            turnoverLimit: 0,
          },
        }),
      },
      bankTransaction: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: 'et-1',
            classificationId: etId,
            type: 'DEBIT',
            amount: 1_000_000,
            description: 'NIP transfer',
            transactionDate: new Date('2026-01-15T12:00:00.000Z'),
            valueDate: new Date('2026-01-15T12:00:00.000Z'),
          },
          {
            id: 'camf-1',
            classificationId: camfId,
            type: 'DEBIT',
            amount: 5_000,
            description: 'MONTHLY MAINTENANCE FEE',
            transactionDate: new Date('2026-01-31T12:00:00.000Z'),
            valueDate: new Date('2026-01-31T12:00:00.000Z'),
          },
          {
            id: 'vc-1',
            classificationId: vcId,
            type: 'DEBIT',
            amount: 375,
            description: 'VAT ON COT',
            transactionDate: new Date('2026-01-31T12:00:00.000Z'),
            valueDate: new Date('2026-01-31T12:00:00.000Z'),
          },
        ]),
      },
    };

    const result = await new CamfAnalyzer(
      db as unknown as DatabaseService,
    ).compute([accountId]);

    expect(result.computation[0].computations[0]).toEqual(
      expect.objectContaining({
        camfRate: 1,
        camfCharge: 1000,
        vatCharge: 75,
      }),
    );
  });
});
