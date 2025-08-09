'use client';
import { useTransactions } from '@/hooks';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { useState } from 'react';
import { Dialog } from '../ui';
import { ConfirmDialog } from './ConfirmDialog';
import { TransactionForm } from './TransactionForm';
import { TransactionItem } from './TransactionItem';

interface MonthlyTransactionListProps {
  month: string;
  transactions: ITransaction[];
}

export function MonthlyTransactionList({
  month,
  transactions,
}: MonthlyTransactionListProps) {
  const { removeTransaction, updateTransaction, loading } = useTransactions();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction | null>(null);

  function handleEdit(id: string) {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
      setSelectedTransaction(transaction);
      setIsDialogOpen(true);
    }
  }

  function handleDelete(transaction: ITransaction) {
    setSelectedTransaction(transaction);
    setIsConfirmDialogOpen(true);
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
    setSelectedTransaction(null);
  }

  function handleCloseConfirmDialog() {
    if (selectedTransaction) {
      removeTransaction(selectedTransaction.id);
    }
    setIsConfirmDialogOpen(false);
  }

  function handleUpdateTransaction(data: Partial<ITransaction>) {
    if (selectedTransaction) {
      updateTransaction(selectedTransaction.id, {
        ...selectedTransaction,
        ...data,
      });
      handleCloseDialog();
    }
  }

  return (
    <div>
      <strong className='mb-2 block text-caption-600 text-background-700 first-letter:capitalize'>
        {month}
      </strong>
      <ul className='w-full space-y-4'>
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onEdit={handleEdit}
            onDelete={() => handleDelete(transaction)}
          />
        ))}
      </ul>
      {selectedTransaction && (
        <Dialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title='Editar transação'
        >
          <TransactionForm
            transaction={selectedTransaction}
            onEdit={handleUpdateTransaction}
            loading={loading}
          />
        </Dialog>
      )}
      {isConfirmDialogOpen && (
        <ConfirmDialog
          isOpen={isConfirmDialogOpen}
          onClose={() => setIsConfirmDialogOpen(false)}
          onConfirm={handleCloseConfirmDialog}
        />
      )}
    </div>
  );
}
