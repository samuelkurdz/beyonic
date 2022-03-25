export interface TableItem {
  valueDate: string;
  transactionID: string;
  movementType: string;
  amount: number;
  status: 'Active' | 'Error' | 'Hold'
}