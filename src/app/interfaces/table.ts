export interface TableItem {
  id: string;
  valueDate: string;
  transactionID: string;
  movementType: string;
  amount: number;
  status: 'Active' | 'Error' | 'Hold'
}