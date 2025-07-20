import { BankAccountRepository } from '../repositories/bankAccount.repository';
import { TransactionRepositoryLocalStorage } from '../repositories/transaction.repository';
import { IBankAccount } from '../types/bank-account';

const transactionRepository = new TransactionRepositoryLocalStorage();
const bankAccountRepository = new BankAccountRepository(transactionRepository);

export const bankAccountService = {
  getAccount(): IBankAccount {
    return bankAccountRepository.get();
  },
};
