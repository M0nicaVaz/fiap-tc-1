'use client';

import {
  createBankAccountService,
  createTransactionService,
} from '@/lib/factories';
import { CreateTransactionDTO, ITransaction } from '@/lib/types/transaction';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface ITransactionContext {
  transactions: ITransaction[];
  balance: number;
  addTransaction: (transaction: CreateTransactionDTO) => void;
  removeTransaction: (id: string) => void;
  updateTransaction: (id: string, updated: Partial<ITransaction>) => void;
}

export const TransactionContext = createContext<ITransactionContext | null>(
  null
);

const transactionService = createTransactionService();
const bankAccountService = createBankAccountService();

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [balance, setBalance] = useState<number>(0);

  function updateBalance() {
    const account = bankAccountService.getAccount();
    setBalance(account.totalBalance);
  }

  function addTransaction(transaction: CreateTransactionDTO) {
    try {
      const newTransaction = transactionService.add(transaction);
      setTransactions(prev => [...prev, newTransaction]);
      updateBalance();
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  }

  function removeTransaction(id: string) {
    try {
      transactionService.remove(id);
      setTransactions(prev => prev.filter(t => t.id !== id));
      updateBalance();
    } catch (error) {
      console.error('Failed to remove transaction:', error);
    }
  }

  function updateTransaction(id: string, updated: Partial<ITransaction>) {
    try {
      transactionService.update(id, updated);
      setTransactions(prev =>
        prev.map(t => (t.id === id ? { ...t, ...updated } : t))
      );
      updateBalance();
    } catch (error) {
      console.error('Failed to update transaction:', error);
    }
  }

  useEffect(() => {
    const getTransactions = () => {
      const allTransactions = transactionService.getAll();
      setTransactions(allTransactions);
      updateBalance();
    };

    try {
      getTransactions();
    } catch (error) {
      console.error('Failed to load transactions:', error);
    }
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        balance,
        addTransaction,
        removeTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
