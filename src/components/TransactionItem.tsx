import { ITransaction } from '@/lib/types/transaction';
import { formatPrice } from '@/utils/formatPrice';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react/dist/ssr';
import { IconButton } from './IconButton';

const transactionTypes: Record<ITransaction['type'], string> = {
  income: 'Depósito',
  expense: 'Despesa',
  investment: 'Investimento',
};

export interface TransactionItemProps {
  transaction: ITransaction;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TransactionItem({
  transaction,
  onEdit,
  onDelete,
}: TransactionItemProps) {
  return (
    <li
      key={transaction.id}
      className='flex w-full flex-col items-center justify-between gap-2 border-b border-b-foreground-400 pb-2'
    >
      <div className='flex w-full items-center justify-between gap-2'>
        <span className='text-body-400'>
          {transactionTypes[transaction.type]}
        </span>
        <div className='flex gap-1'>
          <IconButton
            title='Editar'
            icon={PencilIcon}
            onClick={() => onEdit(transaction.id)}
            variant='small'
          />
          <IconButton
            title='Excluir'
            icon={TrashIcon}
            onClick={() => onDelete(transaction.id)}
            variant='small'
          />
        </div>
      </div>
      <div className='flex w-full items-center justify-between gap-2'>
        <span className='text-body-600 text-foreground-400'>
          {formatPrice(transaction.amount)}
        </span>
        <div className='flex gap-1'>
          <span className='text-caption-400 text-foreground-400/50'>
            {new Date(transaction.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </li>
  );
}
