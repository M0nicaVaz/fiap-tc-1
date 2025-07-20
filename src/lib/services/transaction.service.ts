import { TransactionRepositoryLocalStorage } from '@/lib/repositories/transaction.repository';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { ITransactionRepository } from '@/lib/types/transaction/iTransactionRepository';

class TransactionService {
  private repository: ITransactionRepository;

  constructor(repository: ITransactionRepository) {
    this.repository = repository;
  }

  add(transaction: Omit<ITransaction, 'id' | 'createdAt'>): ITransaction {
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
    const existingTransaction = this.repository.findById(id);
    if (!existingTransaction) return undefined;

    const updatedTransactionData = { ...existingTransaction, ...dto };
    this.repository.update(id, updatedTransactionData);
    return this.repository.findById(id);
  }
}

export const transactionService = new TransactionService(
  new TransactionRepositoryLocalStorage()
);
