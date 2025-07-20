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
    <section className="text-caption-600 bg-white w-full lg:h-dvh p-4">
      <h2 className="text-lg font-bold mb-4">Transações</h2>
      {transactions.length === 0 ? (
        <p>Nenhuma transação cadastrada.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div>
                <span className="font-semibold">{t.description}</span> — R${' '}
                {t.amount} - {t.type} -{' '}
                {new Date(t.createdAt).toLocaleDateString()}
              </div>
              <div className="flex gap-2">
                <Button title="Editar" onClick={() => onEdit(t.id)} />
                <Button title="Excluir" onClick={() => onDelete(t.id)} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
