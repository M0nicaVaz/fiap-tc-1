'use client';

import { createBankAccountService } from '@/lib/factories';
import { useEffect, useState } from 'react';
import { useTransactions } from './useTransactions';

const bankAccountService = createBankAccountService();

export function useBankAccount() {
  const [balance, setBalance] = useState<number>(0);
  const { transactions } = useTransactions();

  useEffect(() => {
    const account = bankAccountService.getAccount();
    setBalance(account.totalBalance);
  }, [transactions]);

  return { balance };
}
