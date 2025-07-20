export interface ITransaction {
  id: string;
  readonly createdAt: string;
  readonly type: 'income' | 'expense' | 'investment';
  amount: number;
  date: Date;
}
