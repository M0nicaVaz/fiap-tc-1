import { Transaction } from '@/core/entities/Transaction.entity';
import { TransactionRepository } from './repository';

export class InMemoryTransactionRepository implements TransactionRepository {
  private transactions: Transaction[] = [];

  add(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  getAll(): Transaction[] {
    return [...this.transactions];
  }

  findById(id: string): Transaction | undefined {
    return this.transactions.find((t) => t.id === id);
  }

  remove(id: string): void {
    this.transactions = this.transactions.filter((t) => t.id !== id);
  }

  update(id: string, updated: Partial<Transaction>): void {
    const index = this.transactions.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.transactions[index] = {
        ...this.transactions[index],
        ...updated,
      };
    }
  }
}
