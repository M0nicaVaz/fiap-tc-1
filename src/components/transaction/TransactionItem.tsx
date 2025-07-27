import { ITransaction } from '@/lib/types/transaction';
import { formatPrice } from '@/utils/formatPrice';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react/dist/ssr';
import { IconButton, ListItem } from '../ui';

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
    <ListItem
      key={transaction.id}
      title={transactionTypes[transaction.type]}
      subtitle={formatPrice(transaction.amount)}
      info={new Date(transaction.createdAt).toLocaleDateString()}
      actions={
        <>
          <IconButton
            title='Editar'
            icon={PencilIcon}
            onClick={() => onEdit(transaction.id)}
            iconColor='text-white'
            variant='small'
          />
          <IconButton
            title='Excluir'
            icon={TrashIcon}
            onClick={() => onDelete(transaction.id)}
            iconColor='text-white'
            variant='small'
          />
        </>
      }
    />
  );
}
