import { useState, useEffect, useCallback } from 'react';
import { Transaction } from '@/core/entities/Transaction.entity';
import { LocalStorageTransactionRepository } from '@/core/repositories/transaction/repositoryLocalStorage';

const repository = new LocalStorageTransactionRepository();

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = () => {
      try {
        const storedTransactions = repository.getAll();
        setTransactions(storedTransactions);
      } catch (error) {
        console.error('Erro ao carregar transações:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  const addTransaction = useCallback(
    (transactionData: Omit<Transaction, 'id'>) => {
      const newTransaction: Transaction = {
        ...transactionData,
        id: crypto.randomUUID(),
      };

      repository.add(newTransaction);
      setTransactions((prev) => [...prev, newTransaction]);
    },
    []
  );

  const removeTransaction = useCallback((id: string) => {
    repository.remove(id);
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const updateTransaction = useCallback(
    (id: string, updates: Partial<Transaction>) => {
      repository.update(id, updates);
      setTransactions((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
      );
    },
    []
  );

  const getTransactionById = useCallback((id: string) => {
    return repository.findById(id);
  }, []);

  return {
    transactions,
    loading,
    addTransaction,
    removeTransaction,
    updateTransaction,
    getTransactionById,
  };
}
