import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { ITransactionReader } from '../types/transaction/iTransactionReader';
import { ITransactionRepository } from '../types/transaction/iTransactionRepository';

const TRANSACTIONS_STORAGE_KEY = process.env
  .NEXT_PUBLIC_TRANSACTIONS_STORAGE_KEY as string;

export class TransactionRepositoryLocalStorage
  implements ITransactionRepository, ITransactionReader
{
  add(transaction: ITransaction): void {
    const currentTransactions = this.getAll();
    const newTransactions = [...currentTransactions, transaction];
    localStorage.setItem(
      TRANSACTIONS_STORAGE_KEY,
      JSON.stringify(newTransactions)
    );
  }

  getAll(): ITransaction[] {
    const data = localStorage.getItem(TRANSACTIONS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  findById(id: string): ITransaction | undefined {
    return this.getAll().find(t => t.id === id);
  }

  remove(id: string): void {
    const currentTransactions = this.getAll();
    const newTransactions = currentTransactions.filter(t => t.id !== id);
    this.updateStorage(newTransactions);
  }

  update(id: string, updated: Partial<ITransaction>): boolean {
    const currentTransactions = this.getAll();
    const transactionIndex = currentTransactions.findIndex(t => t.id === id);

    if (transactionIndex === -1) return false;

    const newTransactions = [...currentTransactions];
    newTransactions[transactionIndex] = {
      ...newTransactions[transactionIndex],
      ...updated,
    };

    this.updateStorage(newTransactions);
    return true;
  }

  private updateStorage(value: ITransaction[]) {
    localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(value));
  }
}
