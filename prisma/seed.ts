import { Category, ClassificationCode, PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed permissions first (if not already)
  const permissionNames = ['VIEW_CLIENTS', 'EDIT_TRANSACTIONS'];

  console.log('🌱 Seeding permissions...');
  for (const name of permissionNames) {
    await prisma.permission.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  // Fetch permissions from DB
  const allPermissions = await prisma.permission.findMany();

  const users = [
    {
      firstName: 'Elisha',
      lastName: 'Benjamin',
      username: 'AD001',
      email: 'malishben360@gmail.com',
      password: '@iElisha2025',
      role: 'SUPER_ADMIN',
      permissions: ['VIEW_CLIENTS', 'EDIT_TRANSACTIONS'],
    },
    {
      firstName: 'Sarah',
      lastName: 'Okoro',
      username: 'AD002',
      email: 'sarah.okoro@example.com',
      password: 'Sarah@1234',
      role: 'ADMIN',
      permissions: ['VIEW_CLIENTS'],
    },
    {
      firstName: 'Rose',
      lastName: 'Gideon',
      username: 'AD003',
      email: 'rose360@gmail.com',
      password: '@iRose2025',
      role: 'ADMIN',
      permissions: ['VIEW_CLIENTS'],
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      username: 'ST001',
      email: 'john.doe@example.com',
      password: 'JohnDoe2025!',
      role: 'STAFF',
      permissions: [],
    },
  ];

  console.log('🌱 Seeding users...');
  for (const user of users) {
    const hashedPassword = await argon2.hash(user.password);

    const permissionRecords = allPermissions.filter((perm) =>
      user.permissions.includes(perm.name),
    );

    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: hashedPassword,
        role: user.role as any,
        permissions: {
          connect: permissionRecords.map((p) => ({ id: p.id })),
        },
      },
    });
  }

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

  console.log('🌱 Seeding Banks...');
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
    'REVERSED ',
    'REVERSED-',
  ];

  console.log('🌱 Seeding Global Reversal Keywords...');
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
      patterns: ['up country deposit', 'upcountry deposit'],
    },
    {
      code: 'LD',
      label: 'Loan Disbursement',
      category: 'DEPOSIT',
      description: 'Funds disbursed from a loan facility',
      patterns: [
        'loan disbursement',
        'loan credit',
        'loan drawdown',
        'Disbursement Credit',
      ],
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
      description: 'Reversal of a previous transaction (credit or debit)',
      patterns: ['REV ', 'REVERSED', 'REV:', 'REV-', 'REVERSAL', 'CSH INF'],
    },
    {
      code: 'INT',
      label: 'Interest',
      category: 'DEPOSIT',
      description: 'Interest earned on the account',
      patterns: ['interest'],
    },
    {
      code: 'CW',
      label: 'Cash/Cheque Withdrawal',
      category: 'WITHDRAWAL',
      description: 'Cash withdrawal via ATM or cheque',
      patterns: ['cash withdrawal', 'atm withdrawal', 'cheque withdrawal'],
    },
    {
      code: 'IT',
      label: 'Internal Transaction',
      category: 'WITHDRAWAL',
      description: 'Transfer within the same bank (intra-bank)',
      patterns: ['internal transfer', 'intra-bank'],
    },
    {
      code: 'ET',
      label: 'External Transfer',
      category: 'WITHDRAWAL',
      description: 'Transfer to another bank (interbank/NIP)',
      patterns: [
        'external transfer',
        'interbank transfer',
        'duty payment',
        'duty pymt',
      ],
    },
    {
      code: 'LR',
      label: 'Loan Repayment',
      category: 'WITHDRAWAL',
      description: 'Repayment of loan principal',
      patterns: [
        'loan repayment',
        'Loan Recovery',
        'loan debit',
        'loan payback',
      ],
    },
    {
      code: 'LNT',
      label: 'Loan Interest',
      category: 'WITHDRAWAL',
      description: 'Interest payment on a loan facility',
      patterns: [
        'loan interest',
        'Overdrawn Interest charged',
        'Overdrawn Penal Int charged',
        'Overdrawn Interest',
        'Overdrawn Penal',
        'Overdraft Interest',
        'Overdraft Penal',
      ],
    },
    {
      code: 'FEE',
      label: 'Lending/Legal Fee',
      category: 'WITHDRAWAL',
      description: 'Lending-related or legal service fees',
      patterns: ['fee', 'legal fee', 'lending fee'],
    },
    {
      code: 'MC',
      label: 'Miscellaneous Charge',
      category: 'WITHDRAWAL',
      description: 'Uncategorized or other charges',
      patterns: [
        'miscellaneous',
        'misc charge',
        'Charge',
        'Charges',
        'CHQ charge',
        'Statement Charge',
        'Statement CHG',
        'SMS ALERT CHARGES',
        'ELECTRONIC MONEY TRANSFER LEVY',
        'TRANSFER LEVY',
      ],
    },
    {
      code: 'CAMF',
      label: 'Current Account Maintenance Fee',
      category: 'WITHDRAWAL',
      description: 'Recurring maintenance fee on current account',
      patterns: [
        'maintenance fee',
        'amf',
        'COMM. ON T/OVER',
        'comission on turnover',
        'MTHLY MTCE FEE',
        'MONTHLY MAINTENANCE FEE',
        'VALUE ADDED TAX DEDUCTION',
        'MNTHLY CHARGE',
        'monthly charge',
        'DBA CHARGE FOR',
        'Acct Maint Charge',
      ],
    },
    {
      code: 'VC',
      label: 'VAT on Current Account Maintenance Fee',
      category: 'WITHDRAWAL',
      description:
        'Value-added tax charged on current account maintenance fees',
      patterns: [
        'vat on current account maintenance fee',
        'vat on maintenance fee',
        'vat on account fee',
        'vat on amf',
        'VAT ON COT',
        'vat on commision turnover',
        'vat on commision on turnover',
        'VAT ON Acct Maint Charge',
      ],
    },
    {
      code: 'VF',
      label: 'VAT on Lending/Legal Fee',
      category: 'WITHDRAWAL',
      description: 'Value-added tax applied to lending or legal fees',
      patterns: [
        'vat on legal fee',
        'vat on lending fee',
        'vat on loan fee',
        'VAT ON MGT FEE',
        'VAT ON FEE',
        'vat on management fee',
      ],
    },
    {
      code: 'WHT',
      label: 'Withholding Tax',
      category: 'WITHDRAWAL',
      description: 'Withholding tax deduction',
      patterns: ['wht', 'withholding tax'],
    },
  ];

  console.log('🌱 Seeding Transaction Classifications and Patterns...');
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

  console.log('✅ All seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
