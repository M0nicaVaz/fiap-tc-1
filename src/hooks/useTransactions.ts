'use client';

import {
  TransactionContext,
  TransactionProvider,
} from '@/context/useTransactionProvider';
import { useContext } from 'react';

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('Provider fora do escopo.');
  }
  return context;
}

export { TransactionProvider };
