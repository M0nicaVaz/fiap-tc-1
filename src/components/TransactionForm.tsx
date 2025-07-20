'use client';
import { useTransactions } from '@/hooks';
import { ITransaction } from '@/lib/types/transaction';
import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';

export function TransactionForm() {
  const [type, setType] = useState<ITransaction['type']>();
  const { addTransaction } = useTransactions();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const amount = formData.get('amount');
    const date = formData.get('date');

    if (!amount || !date || !type) return;

    addTransaction({
      type,
      amount: Number(amount),
      date: new Date(date.toString()),
    });

    e.currentTarget.reset();
  }

  return (
    <section className='w-full bg-gray-000 p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex min-h-[394px] w-[355px] flex-col gap-4 rounded-sm'
      >
        <h2 className='mb-2 text-title-700 text-foreground-400'>
          Nova Transação
        </h2>
        <Select
          placeholder='Selecione o tipo de transação'
          options={[
            { label: 'Depósito', value: 'income' },
            { label: 'Despesa', value: 'expense' },
            { label: 'Investimento', value: 'investment' },
          ]}
          onChange={value => setType(value as ITransaction['type'])}
        />
        <Input
          name='amount'
          placeholder='00,00'
          type='number'
          label='Valor'
          step='0.01'
          min='0.01'
          required
        />
        <Input
          name='date'
          placeholder='Data'
          type='date'
          label='Data da transação'
          required
        />

        <Button title='Concluir transação' type='submit' />
      </form>
    </section>
  );
}
