import { BankAccountRepository } from '../repositories/bankAccount.repository';
import { TransactionRepositoryLocalStorage } from '../repositories/transaction.repository';
import { BankAccountService } from '../services/bankAccount.service';

export function createBankAccountService() {
  const transactionRepository = new TransactionRepositoryLocalStorage();
  const bankAccountRepository = new BankAccountRepository(
    transactionRepository
  );
  const service = new BankAccountService(bankAccountRepository);
  return service;
}
