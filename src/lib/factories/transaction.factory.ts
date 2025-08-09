import { TransactionRepositoryLocalStorage } from '../repositories/transaction.repository';
import { TransactionService } from '../services/transaction.service';

export function createTransactionService() {
  const repository = new TransactionRepositoryLocalStorage();
  const service = new TransactionService(repository);
  return service;
}
