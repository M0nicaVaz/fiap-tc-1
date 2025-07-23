'use client';
import { CreateTransactionDTO, ITransaction } from '@/lib/types/transaction';
import { useState } from 'react';
import { Input, Select } from '../form';
import { Button } from '../ui';

export interface TransactionFormProps {
  transaction?: ITransaction;
  onCreate?: (data: CreateTransactionDTO) => void;
  onEdit?: (data: Partial<ITransaction>) => void;
  onCancel?: () => void;
  loading?: boolean;
}

export function TransactionForm({
  transaction,
  onCreate,
  onEdit,
  loading = false,
}: TransactionFormProps) {
  const [type, setType] = useState<ITransaction['type']>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const amount = formData.get('amount');
    const date = formData.get('date');

    if (onEdit && transaction) {
      const editedAmount = amount ?? transaction.amount;
      const editedDate = date ?? transaction.createdAt;
      onEdit({
        id: transaction.id,
        amount: Number(editedAmount),
        date: new Date(editedDate.toString()),
      });
    } else if (onCreate) {
      if (!amount || !date || !type) return;
      onCreate({
        type,
        amount: Number(amount),
        date: new Date(date.toString()),
      });
    }

    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className='z-10 flex flex-col gap-4'>
      {transaction == null && (
        <Select
          placeholder='Selecione o tipo de transação'
          options={[
            { label: 'Depósito', value: 'income' },
            { label: 'Despesa', value: 'expense' },
            { label: 'Investimento', value: 'investment' },
          ]}
          onChange={value => setType(value as ITransaction['type'])}
        />
      )}

      <Input
        name='amount'
        placeholder='00,00'
        type='number'
        label='Valor'
        step='0.01'
        min='0.01'
        required
        defaultValue={transaction?.amount}
      />
      <Input
        name='date'
        placeholder='Data'
        type='date'
        label='Data da transação'
        required
        defaultValue={
          transaction?.createdAt
            ? new Date(transaction.createdAt).toISOString().split('T')[0]
            : ''
        }
      />

      <div className='mt-6'>
        <Button
          loading={loading}
          title={transaction ? 'Salvar alterações' : 'Concluir transação'}
          type='submit'
        />
      </div>
    </form>
  );
}
