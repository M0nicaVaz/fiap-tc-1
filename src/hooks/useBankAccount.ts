'use client';

import { bankAccountService } from '@/lib/services/bankAccount.service';
import { useEffect, useState } from 'react';
import { useTransactions } from './useTransactions';

export function useBankAccount() {
  const [balance, setBalance] = useState<number>(0);
  const { transactions } = useTransactions();

  useEffect(() => {
    const account = bankAccountService.getAccount();
    setBalance(account.totalBalance);
  }, [transactions]);

  return { balance };
}
