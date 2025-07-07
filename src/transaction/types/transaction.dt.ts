export type TransactionType = {
  No: string;
  TransDate: string;
  ValueDate: string;
  TransDesc: string;
  TellerNo: string;
  ChequeNo: string;
  Debit: string;
  Credit: string;
  Balance: string;
};

export type TransactionClassificationType = {
  transactionDate: string;
  valueDate: string;
  description: string;
  debit: number;
  credit: number;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
  balance: number;
  rowIndex: string;
  tellerNo: string | null;
  chequeNo: string | null;
  extractedReference: string;
  isReversal: boolean;
  reversalPairIndex: number;
  classificationId: string;
};
