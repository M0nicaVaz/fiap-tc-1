'use client';

import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { transactionService } from '@/lib/services/transaction.service';
import { useCallback, useEffect, useState } from 'react';

export function useTransactions() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const allTransactions = transactionService.getAll();
      setTransactions(allTransactions);
    } catch (error) {
      console.error('Failed to load transactions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTransaction = useCallback(
    (transaction: Omit<ITransaction, 'id' | 'createdAt'>) => {
      try {
        const newTransaction = transactionService.add(transaction);
        setTransactions((prev) => [...prev, newTransaction]);
      } catch (error) {
        console.error('Failed to add transaction:', error);
      }
    },
    []
  );

  const removeTransaction = useCallback((id: string) => {
    try {
      transactionService.remove(id);
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Failed to remove transaction:', error);
    }
  }, []);

  const updateTransaction = useCallback(
    (id: string, updated: Partial<ITransaction>) => {
      try {
        transactionService.update(id, updated);
        setTransactions((prev) =>
          prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
        );
      } catch (error) {
        console.error('Failed to update transaction:', error);
      }
    },
    []
  );

  return {
    transactions,
    loading,
    addTransaction,
    removeTransaction,
    updateTransaction,
  };
}
