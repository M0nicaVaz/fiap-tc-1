export interface ITransaction {
  id: string;
  createdAt: string;
  type: 'income' | 'expense' | 'investment';
  amount: number;
  description: string;
  date: Date;
}
