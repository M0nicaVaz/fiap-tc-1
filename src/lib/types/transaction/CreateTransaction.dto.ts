import { ITransaction } from './iTransaction';

export type CreateTransactionDTO = Omit<ITransaction, 'id' | 'createdAt'>;
