import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { TransactionItem } from './TransactionItem';

interface MonthlyTransactionListProps {
  month: string;
  transactions: ITransaction[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function MonthlyTransactionList({
  month,
  transactions,
  onEdit,
  onDelete,
}: MonthlyTransactionListProps) {
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
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
