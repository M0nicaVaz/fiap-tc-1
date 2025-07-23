'use client';
import { useTransactions } from '@/hooks';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { useState } from 'react';
import { Modal } from '../ui/Modal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction | null>(null);

  function handleEdit(id: string) {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
      setSelectedTransaction(transaction);
      setIsModalOpen(true);
    }
  }

  function handleDelete(id: string) {
    removeTransaction(id);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  }

  function handleUpdateTransaction(data: Partial<ITransaction>) {
    console.log('Updating transaction with data:', data);
    if (selectedTransaction) {
      updateTransaction(selectedTransaction.id, {
        ...selectedTransaction,
        ...data,
      });
      handleCloseModal();
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
            onDelete={handleDelete}
          />
        ))}
      </ul>
      {selectedTransaction && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title='Editar transação'
        >
          <div className='p-4'>
            <TransactionForm
              transaction={selectedTransaction}
              onEdit={handleUpdateTransaction}
              loading={loading}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
