'use client';

import { createTransactionService } from '@/lib/factories';
import { CreateTransactionDTO } from '@/lib/types/transaction';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface ITransactionContext {
  transactions: ITransaction[];
  loading: boolean;
  addTransaction: (transaction: CreateTransactionDTO) => void;
  removeTransaction: (id: string) => void;
  updateTransaction: (id: string, updated: Partial<ITransaction>) => void;
}

export const TransactionContext = createContext<ITransactionContext | null>(
  null
);

const transactionService = createTransactionService();

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);

  const addTransaction = useCallback((transaction: CreateTransactionDTO) => {
    try {
      const newTransaction = transactionService.add(transaction);
      setTransactions(prev => [...prev, newTransaction]);
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  }, []);

  const removeTransaction = useCallback((id: string) => {
    try {
      transactionService.remove(id);
      setTransactions(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error('Failed to remove transaction:', error);
    }
  }, []);

  const updateTransaction = useCallback(
    (id: string, updated: Partial<ITransaction>) => {
      try {
        transactionService.update(id, updated);
        setTransactions(prev =>
          prev.map(t => (t.id === id ? { ...t, ...updated } : t))
        );
      } catch (error) {
        console.error('Failed to update transaction:', error);
      }
    },
    []
  );

  useEffect(() => {
    const getTransactions = () => {
      const allTransactions = transactionService.getAll();
      setTransactions(allTransactions);
    };

    try {
      getTransactions();
    } catch (error) {
      console.error('Failed to load transactions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        addTransaction,
        removeTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
