import { InternalServerErrorException } from '@nestjs/common';
import { RateService } from './rate.service';
import { DatabaseService } from 'src/database/database.service';
import { RateStorageService } from './rate.storage.service';

// A stored rate row with every rate field populated
const storedRate = {
  id: 'rate-1',
  clientId: 'client-1',
  bankId: 'bank-1',
  code: 'ARC-ZENI-PRIN-12345678',
  drRates: [],
  loanInterestRates: [],
  lcCommissions: [],
  preNegotiationRates: [],
  postNegotiationRates: [],
  creditInterestRates: [],
  camfRate: 1,
  managementFeeRate: 0.5,
  fees: [],
  returnChargeRate: 0.05,
  returnChargeLimit: 1000,
  cotCovenantRate: 0.02,
  cotOffCoverRate: 0.03,
  cotOICRate: 0.04,
  turnoverLimit: 10000,
  cotCovenantFrequency: 'monthly',
  chargeCOTOnShortfall: true,
  debitRate: 0.01,
  excessRate: 0.02,
  excessRateType: 'flat',
  vatRate: 7.5,
  whtRate: 10,
  rateType: 'tiered',
  currency: 'NGN',
  effectiveFrom: new Date('2026-01-01'),
  effectiveTo: new Date('2026-12-31'),
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-01-01'),
  client: { id: 'client-1', companyName: 'Henry Holdings' },
  bank: { id: 'bank-1', name: 'Zenith Bank', code: '057' },
};

type Row = Record<string, unknown>;

// Applies a Prisma-style top-level `select`, like the real client does
const project = (row: Row, args?: { select?: Record<string, unknown> }) => {
  if (!args?.select) return row;
  return Object.fromEntries(
    Object.entries(args.select)
      .filter(([, on]) => on)
      .map(([key]) => [key, row[key]]),
  );
};

describe('RateService list endpoints', () => {
  let service: RateService;

  beforeEach(() => {
    const db = {
      accountRate: {
        findMany: jest.fn((args?: { select?: Row }) => [
          project(storedRate, args),
        ]),
      },
      client: { findUnique: jest.fn().mockResolvedValue({ id: 'client-1' }) },
      bank: { findUnique: jest.fn().mockResolvedValue({ id: 'bank-1' }) },
    } as unknown as DatabaseService;
    service = new RateService(db, {} as RateStorageService);
  });

  const rateFields = {
    camfRate: 1,
    managementFeeRate: 0.5,
    debitRate: 0.01,
    vatRate: 7.5,
    turnoverLimit: 10000,
    loanInterestRates: [],
    fees: [],
  };

  it('GET /rates returns every rate field with client and bank', async () => {
    const [rate] = await service.findAll();
    expect(rate).toEqual(expect.objectContaining(rateFields));
    expect(rate).toEqual(
      expect.objectContaining({
        client: storedRate.client,
        bank: storedRate.bank,
      }),
    );
  });

  it('GET /rates/client/:clientId returns every rate field', async () => {
    const [rate] = await service.findByClientId('client-1');
    expect(rate).toEqual(expect.objectContaining(rateFields));
  });

  it('GET /rates/client/:clientId/bank/:bankId returns every rate field', async () => {
    const [rate] = await service.findByBankId('client-1', 'bank-1');
    expect(rate).toEqual(expect.objectContaining(rateFields));
  });
});

describe('RateService document lists', () => {
  it('returns url: null for a document whose file cannot be signed and signs the rest', async () => {
    const documents = [
      {
        id: 'doc-1',
        url: 'contract-documents/rdc-1.pdf',
        rates: [{ bank: { name: 'Zenith Bank' } }],
      },
      {
        id: 'doc-2',
        url: 'contract-documents/rdc-2.pdf',
        rates: [
          { bank: { name: 'Zenith Bank' } },
          { bank: { name: 'GTBank' } },
          { bank: { name: 'Zenith Bank' } },
        ],
      },
      {
        id: 'doc-3',
        url: 'contract-documents/rdc-3.pdf',
        rates: [],
      },
    ];
    const db = {
      document: { findMany: jest.fn().mockResolvedValue(documents) },
    } as unknown as DatabaseService;
    const storage = {
      getFileUrl: jest.fn((key: string) =>
        key.includes('rdc-1')
          ? Promise.reject(
              new InternalServerErrorException('File storage operation failed'),
            )
          : Promise.resolve(`https://signed.example/${key}`),
      ),
    } as unknown as RateStorageService;
    const service = new RateService(db, storage);

    await expect(service.findAllDocuments()).resolves.toEqual([
      { id: 'doc-1', url: null, bankName: 'Zenith Bank' },
      {
        id: 'doc-2',
        url: 'https://signed.example/contract-documents/rdc-2.pdf',
        bankName: 'Zenith Bank, GTBank',
      },
      {
        id: 'doc-3',
        url: 'https://signed.example/contract-documents/rdc-3.pdf',
        bankName: null,
      },
    ]);
  });
});
