import { Category, ClassificationCode, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed banks
  const banks = [
    { name: 'Access Bank', code: '044' },
    { name: 'Citibank', code: '023' },
    { name: 'Ecobank Nigeria', code: '050' },
    { name: 'Fidelity Bank', code: '070' },
    { name: 'First Bank of Nigeria', code: '011' },
    { name: 'First City Monument Bank (FCMB)', code: '214' },
    { name: 'Globus Bank', code: '00103' },
    { name: 'Guaranty Trust Bank (GTBank)', code: '058' },
    { name: 'Heritage Bank', code: '030' },
    { name: 'Jaiz Bank', code: '301' },
    { name: 'Keystone Bank', code: '082' },
    { name: 'Polaris Bank', code: '076' },
    { name: 'Providus Bank', code: '101' },
    { name: 'Stanbic IBTC Bank', code: '221' },
    { name: 'Standard Chartered Bank', code: '068' },
    { name: 'Sterling Bank', code: '232' },
    { name: 'Suntrust Bank', code: '100' },
    { name: 'Titan Trust Bank', code: '102' },
    { name: 'Union Bank of Nigeria', code: '032' },
    { name: 'United Bank for Africa (UBA)', code: '033' },
    { name: 'Unity Bank', code: '215' },
    { name: 'Wema Bank', code: '035' },
    { name: 'Zenith Bank', code: '057' },
    { name: 'Parallex Bank', code: '104' },
    { name: 'Taj Bank', code: '302' },
    { name: 'Lotus Bank', code: '303' },
    { name: 'Optus Bank', code: '304' },
  ];

  for (const bank of banks) {
    await prisma.bank.upsert({
      where: { code: bank.code },
      update: {},
      create: bank,
    });
  }

  // seed known reversal keywords
  const globalReversalKeywords = [
    'REV ',
    'REVMF',
    'REV:',
    'RV:',
    'RTD:',
    'RV ',
    'RET.',
    'RTRN ',
    'RTN ',
    'RB ',
    'RVSL ',
    'RSVL ',
    'ROE ',
    'REVERSAL ',
    'RVSL/',
    'R:',
    'RVSL:',
    'RVS ',
    'REV-',
    'RSV ',
    'REVERSAL-',
    'REFUND ',
    'REFUND-',
    'REVERSED ',
    'REVERSED-',
  ];

  for (const keyword of globalReversalKeywords) {
    const existing = await prisma.reversalKeyword.findFirst({
      where: {
        keyword: keyword,
        bankId: null,
      },
    });

    if (existing) {
      // optionally update if needed
      await prisma.reversalKeyword.update({
        where: { id: existing.id },
        data: {
          isGlobal: true,
        },
      });
    } else {
      await prisma.reversalKeyword.create({
        data: {
          keyword: keyword,
          isGlobal: true,
          bankId: null,
        },
      });
    }
  }

  console.log('🌱 Seeding Transaction Classifications and Patterns...');

  // 1. Define classification records
  const classificationData: {
    code: ClassificationCode;
    label: string;
    category: Category;
    description?: string;
    patterns: string[];
  }[] = [
    {
      code: 'CD',
      label: 'Cash/Cheque Deposit',
      category: 'DEPOSIT',
      description: 'Direct deposit of cash or cheques',
      patterns: ['cash deposit', 'cheque deposit', 'funds deposit'],
    },
    {
      code: 'LCD',
      label: 'Local Cheque Deposit',
      category: 'DEPOSIT',
      description: 'Deposit of local cheques',
      patterns: ['local cheque'],
    },
    {
      code: 'UCD',
      label: 'Up Country Deposit',
      category: 'DEPOSIT',
      description: 'Deposit of up-country cheques',
      patterns: ['up country deposit'],
    },
    {
      code: 'LD',
      label: 'Loan Disbursement',
      category: 'DEPOSIT',
      description: 'Funds disbursed from a loan facility',
      patterns: ['loan disbursement', 'loan credit'],
    },
    {
      code: 'RET',
      label: 'Return Item',
      category: 'WITHDRAWAL',
      description: 'Returned inward or outward items',
      patterns: ['returned cheque', 'returned item', 'return outward'],
    },
    {
      code: 'REV',
      label: 'Reversal',
      category: 'DEPOSIT',
      description: 'Reversal of a previous transaction',
      patterns: ['REV ', 'REVERSED', 'REV:', 'REV-', 'REVERSAL'],
    },
    {
      code: 'INT',
      label: 'Interest',
      category: 'DEPOSIT',
      description: 'Interest earned on account',
      patterns: ['interest'],
    },
    {
      code: 'CW',
      label: 'Cash Withdrawal',
      category: 'WITHDRAWAL',
      description: 'Cash or cheque withdrawal',
      patterns: ['cash withdrawal', 'atm withdrawal'],
    },
    {
      code: 'IT',
      label: 'Internal Transfer',
      category: 'WITHDRAWAL',
      description: 'Transfer within same bank',
      patterns: ['internal transfer', 'intra-bank'],
    },
    {
      code: 'ET',
      label: 'External Transfer',
      category: 'WITHDRAWAL',
      description: 'Transfer to other banks',
      patterns: ['nip', 'external transfer', 'interbank transfer'],
    },
    {
      code: 'LR',
      label: 'Loan Repayment',
      category: 'WITHDRAWAL',
      description: 'Repayment of loan',
      patterns: ['loan repayment'],
    },
    {
      code: 'LNT',
      label: 'Loan Interest',
      category: 'WITHDRAWAL',
      description: 'Interest payment on loan',
      patterns: ['loan interest'],
    },
    {
      code: 'CO',
      label: 'Commission (WHT)',
      category: 'WITHDRAWAL',
      description: 'Commission or withholding tax',
      patterns: ['commission', 'wht'],
    },
    {
      code: 'FEE',
      label: 'Lending/Legal Fee',
      category: 'WITHDRAWAL',
      description: 'Bank service fees',
      patterns: ['fee', 'charges', 'service charge'],
    },
    {
      code: 'MC',
      label: 'Miscellaneous Charge',
      category: 'WITHDRAWAL',
      description: 'Other undefined charges',
      patterns: ['miscellaneous'],
    },
    {
      code: 'CAMF',
      label: 'Account Maintenance Fee',
      category: 'WITHDRAWAL',
      description: 'Monthly maintenance fee',
      patterns: ['maintenance fee', 'amf'],
    },
    {
      code: 'VAT',
      label: 'VAT on Fees',
      category: 'WITHDRAWAL',
      description: 'Value-added tax on banking services',
      patterns: ['vat', 'vat on fee'],
    },
  ];

  // 2. Upsert classifications and attach patterns
  for (const item of classificationData) {
    const classification = await prisma.transactionClassification.upsert({
      where: { code: item.code },
      update: {},
      create: {
        code: item.code,
        label: item.label,
        category: item.category,
        description: item.description,
      },
    });

    for (const keyword of item.patterns) {
      const existingPattern = await prisma.classificationPattern.findFirst({
        where: {
          keyword,
          classificationId: classification.id,
          bankId: null,
        },
      });

      if (!existingPattern) {
        await prisma.classificationPattern.create({
          data: {
            keyword,
            classificationId: classification.id,
            isRegex: false,
            bankId: null,
          },
        });
      }
    }
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
