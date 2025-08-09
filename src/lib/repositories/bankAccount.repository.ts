import { IBankAccount } from '../types/bank-account/iBankAccount';
import { IBankAccountRepository } from '../types/bank-account/iBankAccountRepository';
import { ITransactionReader } from '../types/transaction/iTransactionReader';

export class BankAccountRepository implements IBankAccountRepository {
  constructor(private transactionRepository: ITransactionReader) {}

  get(): IBankAccount {
    const allTransactions = this.transactionRepository.getAll();
    const totalBalance = allTransactions.reduce((sum, transaction) => {
      if (transaction.type === 'income') return sum + transaction.amount;
      if (transaction.type === 'expense' || transaction.type === 'investment') {
        return sum - transaction.amount;
      }
      return sum;
    }, 0);

    return { totalBalance };
  }
}
