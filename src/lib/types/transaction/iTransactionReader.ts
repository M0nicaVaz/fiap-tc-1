import { ITransaction } from './iTransaction';

export interface ITransactionReader {
  getAll(): ITransaction[];
}
