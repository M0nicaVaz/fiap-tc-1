import { TransactionRepositoryLocalStorage } from '@/lib/repositories/transaction.repository';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { ITransactionRepository } from '@/lib/types/transaction/iTransactionRepository';
import { CreateTransactionDTO } from '../types/transaction';

class TransactionService {
  private repository: ITransactionRepository;

  constructor(repository: ITransactionRepository) {
    this.repository = repository;
  }

  add(transaction: CreateTransactionDTO): ITransaction {
    const newTransaction: ITransaction = {
      ...transaction,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.repository.add(newTransaction);
    return newTransaction;
  }

  getAll(): ITransaction[] {
    return this.repository.getAll();
  }

  findById(id: string): ITransaction | undefined {
    return this.repository.findById(id);
  }

  remove(id: string): void {
    this.repository.remove(id);
  }

  update(id: string, dto: Partial<ITransaction>): ITransaction | undefined {
    const updated = this.repository.update(id, dto);
    if (!updated) return undefined;
    return this.repository.findById(id);
  }
}

export const transactionService = new TransactionService(
  new TransactionRepositoryLocalStorage()
);
