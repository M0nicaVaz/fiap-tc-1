import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { useState } from 'react';
import { Button } from './Button';

interface NewTransactionProps {
  onAdd: (transaction: Omit<ITransaction, 'id' | 'createdAt'>) => void;
}

export function NewTransaction({ onAdd }: NewTransactionProps) {
  const [type, setType] = useState<'income' | 'expense' | 'investment'>(
    'income'
  );
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!amount || !description || !date) return;
    onAdd({
      type,
      amount: Number(amount),
      description,
      date: new Date(date),
    });
    setAmount('');
    setDescription('');
    setDate('');
    setType('income');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full max-w-md flex-col gap-2 rounded-sm bg-gray-000 p-4'
    >
      <h2 className='mb-2 text-lg font-bold'>Nova Transação</h2>
      <input
        className='rounded border p-2'
        placeholder='Descrição'
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        className='rounded border p-2'
        placeholder='Valor'
        type='number'
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <input
        className='rounded border p-2'
        placeholder='Data'
        type='date'
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <select
        className='rounded border p-2'
        value={type}
        onChange={e =>
          setType(e.target.value as 'income' | 'expense' | 'investment')
        }
      >
        <option value='income'>Receita</option>
        <option value='expense'>Despesa</option>
        <option value='investment'>Investimento</option>
      </select>
      <Button title='Adicionar' type='submit' />
    </form>
  );
}
