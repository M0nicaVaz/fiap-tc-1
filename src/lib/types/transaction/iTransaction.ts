export interface ITransaction {
  id: string;
  readonly createdAt: string;
  type: 'income' | 'expense' | 'investment';
  amount: number;
  date: Date;
}
