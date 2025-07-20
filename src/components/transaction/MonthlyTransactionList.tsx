'use client';
import { useTransactions } from '@/hooks';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { TransactionItem } from './TransactionItem';

interface MonthlyTransactionListProps {
  month: string;
  transactions: ITransaction[];
}

export function MonthlyTransactionList({
  month,
  transactions,
}: MonthlyTransactionListProps) {
  const { removeTransaction } = useTransactions();

  function handleEdit(id: string) {
    console.log(`Edit transaction with id: ${id}`);
  }
  function handleDelete(id: string) {
    removeTransaction(id);
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
    </div>
  );
}
