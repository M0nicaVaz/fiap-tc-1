import { IBankAccount } from '../types/bank-account';
import { IBankAccountRepository } from '../types/bank-account/iBankAccountRepository';

export class BankAccountService {
  constructor(private repository: IBankAccountRepository) {}

  getAccount(): IBankAccount {
    return this.repository.get();
  }
}
