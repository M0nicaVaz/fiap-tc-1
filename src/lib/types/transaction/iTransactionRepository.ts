import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { ITransactionReader } from './iTransactionReader';

export interface ITransactionRepository extends ITransactionReader {
  add(transaction: ITransaction): void;
  remove(id: string): void;
  findById(id: string): ITransaction | undefined;
  update(id: string, updated: Partial<ITransaction>): boolean;
}
