import { Transaction } from '@/core/entities/Transaction.entity';
import { TransactionRepository } from './repository';

const STORAGE_KEY = 'transactions';

export class LocalStorageTransactionRepository
  implements TransactionRepository
{
  private getTransactions(): Transaction[] {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    try {
      const transactions = JSON.parse(stored);
      return transactions.map((t: Record<string, unknown>) => ({
        ...t,
        date: new Date(t.date as string),
      }));
    } catch {
      return [];
    }
  }

  private saveTransactions(transactions: Transaction[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }

  add(transaction: Transaction): void {
    const transactions = this.getTransactions();
    transactions.push(transaction);
    this.saveTransactions(transactions);
  }

  getAll(): Transaction[] {
    return this.getTransactions();
  }

  findById(id: string): Transaction | undefined {
    const transactions = this.getTransactions();
    return transactions.find((t) => t.id === id);
  }

  remove(id: string): void {
    const transactions = this.getTransactions();
    const filtered = transactions.filter((t) => t.id !== id);
    this.saveTransactions(filtered);
  }

  update(id: string, updated: Partial<Transaction>): void {
    const transactions = this.getTransactions();
    const index = transactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      transactions[index] = {
        ...transactions[index],
        ...updated,
      };
      this.saveTransactions(transactions);
    }
  }
}
