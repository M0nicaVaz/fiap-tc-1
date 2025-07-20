'use client';

import { useContext } from 'react';
import {
  TransactionContext,
  TransactionProvider,
} from '../context/useTransactionProvider';

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('Provider fora do escopo.');
  }
  return context;
}

export { TransactionProvider };
