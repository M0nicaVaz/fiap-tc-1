import { useState } from 'react';
import { Button } from './Button';
import { CreateTransactionDTO } from '@/lib/types/transaction';
import { Select } from './Select';
import { Input } from './Input';

interface NewTransactionProps {
  onAdd: (transaction: CreateTransactionDTO) => void;
}

export function NewTransaction({ onAdd }: NewTransactionProps) {
  const [type, setType] = useState<'income' | 'expense' | 'investment'>(
    'income'
  );
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!amount || !date) return;
    onAdd({
      type,
      amount: Number(amount),
      date: new Date(date),
    });
    setAmount('');
    setDate('');
    setType('income');
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
          onChange={e => console.log(e)}
        />
        <Input
          placeholder='00,00'
          type='number'
          value={amount}
          onChange={e => setAmount(e.target.value)}
          label='Valor'
          required
        />
        <Input
          placeholder='Data'
          type='date'
          label='Data da transação'
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <Button title='Concluir transação' type='submit' />
      </form>
    </section>
  );
}
