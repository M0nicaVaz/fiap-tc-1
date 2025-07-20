import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { TransactionItem } from './TransactionItem';

interface TransactionListProps {
  transactions: ITransaction[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TransactionList({
  transactions,
  onEdit,
  onDelete,
}: TransactionListProps) {
  return (
    <section className='w-full min-w-[280px] bg-white p-6 lg:h-dvh'>
      <h2 className='mb-4 text-lg font-bold'>Transações</h2>
      {transactions.length === 0 ? (
        <p>Nenhuma transação cadastrada.</p>
      ) : (
        <ul className='w-full space-y-2'>
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
