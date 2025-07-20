import { useState } from 'react';
import { Button } from './Button';
import { Transaction } from '@/core/entities/Transaction.entity';

interface NewTransactionProps {
  onAdd: (transaction: Omit<Transaction, 'id'>) => void;
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
      className="bg-gray-000 rounded-sm p-4 flex flex-col gap-2 w-full max-w-md"
    >
      <h2 className="text-lg font-bold mb-2">Nova Transação</h2>
      <input
        className="border p-2 rounded"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Valor"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Data"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        className="border p-2 rounded"
        value={type}
        onChange={(e) =>
          setType(e.target.value as 'income' | 'expense' | 'investment')
        }
      >
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
        <option value="investment">Investimento</option>
      </select>
      <Button title="Adicionar" type="submit" />
    </form>
  );
}
