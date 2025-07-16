import { Transaction } from '@/core/entities/Transaction.entity';

export interface TransactionRepository {
  add(transaction: Transaction): void;
  getAll(): Transaction[];
  findById(id: string): Transaction | undefined;
  remove(id: string): void;
  update(id: string, updated: Partial<Transaction>): void;
}
