import { ITransaction } from '@/lib/types/transaction/iTransaction';

export interface ITransactionRepository {
  add(transaction: ITransaction): void;
  getAll(): ITransaction[];
  findById(id: string): ITransaction | undefined;
  remove(id: string): void;
  update(id: string, updated: Partial<ITransaction>): boolean;
}
