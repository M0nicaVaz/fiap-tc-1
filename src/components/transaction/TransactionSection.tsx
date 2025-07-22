'use client';
import { SquaresSVG } from '@/assets/illustrations';
import { TransactionSVG } from '@/assets/illustrations/TransactionSVG';
import { useTransactions } from '@/hooks';
import { TransactionForm } from './TransactionForm';

export function TransactionSection() {
  const { addTransaction } = useTransactions();
  return (
    <section className='relative h-[663px] w-full rounded-sm bg-gray-000 p-4 pb-0 sm:h-[480px]'>
      <SquaresSVG variant='dark' className='absolute top-0 sm:right-0' />
      <SquaresSVG
        variant='dark'
        className='absolute right-0 bottom-0 rotate-180 sm:left-0'
      />
      <TransactionSVG className='absolute right-0 bottom-2' />

      <h2 className='relative mb-6 text-title-700 text-foreground-400'>
        Nova Transação
      </h2>

      <div className='min-h-[364px] w-[355px] flex-col gap-4'>
        <TransactionForm onCreate={addTransaction} />
      </div>
    </section>
  );
}
