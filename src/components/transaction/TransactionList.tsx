'use client';

import { useTransactions } from '@/hooks';
import { ITransaction } from '@/lib/types/transaction/iTransaction';
import { Suspense } from 'react';
import { MonthlyTransactionList } from './MonthlyTransactionList';

export function TransactionList() {
  const { transactions } = useTransactions();

  const groupedTransactions = transactions.reduce(
    (acc, transaction) => {
      const month = new Date(transaction.date).toLocaleString('pt-BR', {
        month: 'long',
        year: 'numeric',
      });
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(transaction);
      return acc;
    },
    {} as Record<string, ITransaction[]>
  );

  const sortedMonths = Object.keys(groupedTransactions).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className='w-full min-w-[280px] bg-white p-6 lg:h-dvh'>
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
