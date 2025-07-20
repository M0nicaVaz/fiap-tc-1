import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { Button } from './Button';

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
    <section className='w-full bg-white p-4 text-caption-600 lg:h-dvh'>
      <h2 className='mb-4 text-lg font-bold'>Transações</h2>
      {transactions.length === 0 ? (
        <p>Nenhuma transação cadastrada.</p>
      ) : (
        <ul className='space-y-2'>
          {transactions.map(t => (
            <li
              key={t.id}
              className='flex items-center justify-between border-b py-2'
            >
              <div>
                <span className='font-semibold'>{t.description}</span> — R${' '}
                {t.amount} - {t.type} -{' '}
                {new Date(t.createdAt).toLocaleDateString()}
              </div>
              <div className='flex gap-2'>
                <Button title='Editar' onClick={() => onEdit(t.id)} />
                <Button title='Excluir' onClick={() => onDelete(t.id)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
