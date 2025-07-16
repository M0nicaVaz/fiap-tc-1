export interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'investment';
  amount: number;
  description: string;
  date: Date;
}
