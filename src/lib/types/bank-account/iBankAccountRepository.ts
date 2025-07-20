import { IBankAccount } from './iBankAccount';

export interface IBankAccountRepository {
  get(): IBankAccount;
}
