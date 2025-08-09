'use client';

import { useTransactions } from '@/hooks';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { Suspense } from 'react';
import { MonthlyTransactionList } from './MonthlyTransactionList';

export function TransactionList() {
  const { transactions } = useTransactions();

  const groupedTransactions = transactions.reduce(
    (allMonths, transaction) => {
      const month = new Date(transaction.date).toLocaleString('pt-BR', {
        month: 'long',
        year: 'numeric',
      });
      if (!allMonths[month]) {
        allMonths[month] = [];
      }
      allMonths[month].push(transaction);
      return allMonths;
    },
    {} as Record<string, ITransaction[]>
  );

  const sortedMonths = Object.keys(groupedTransactions).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className='h-full w-full min-w-[280px] overflow-auto rounded-md bg-white p-6 lg:min-h-[915px]'>
      <h2 className='mb-4 text-lg font-bold'>Extrato</h2>
      {transactions.length === 0 ? (
        <p>Nenhuma transação cadastrada.</p>
      ) : (
        <div className='w-full space-y-6'>
          {sortedMonths.map(month => (
            <Suspense
              key={month}
              fallback={<div>Carregando transações...</div>}
            >
              <MonthlyTransactionList
                month={month}
                transactions={groupedTransactions[month]}
              />
            </Suspense>
          ))}
        </div>
      )}
    </section>
  );
}
