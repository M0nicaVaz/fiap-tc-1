'use client';
import { useTransactions } from '@/hooks';
import { TransactionForm } from './TransactionForm';

export function TransactionSection() {
  const { addTransaction } = useTransactions();
  return (
    <section className='w-full rounded-sm bg-gray-000 p-4 pb-0'>
      <h2 className='mb-6 text-title-700 text-foreground-400'>
        Nova Transação
      </h2>

      <div className='min-h-[364px] w-[355px] flex-col gap-4'>
        <TransactionForm onCreate={addTransaction} />
      </div>
    </section>
  );
}
