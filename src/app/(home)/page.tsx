'use client';
import { useState } from 'react';
import {
  Header,
  Menu,
  NewTransaction,
  TransactionList,
  WelcomePannel,
} from '@/components';
import { useTransactions } from '@/hooks';
import { Transaction } from '@/lib/types/transaction/iTransaction';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { transactions, loading, addTransaction, removeTransaction } =
    useTransactions();

  const routes = [
    { label: 'Início', href: '/' },
    { label: 'Transferências', href: '/transactions' },
    { label: 'Investimentos', href: '/investimentos' },
    { label: 'Outros serviços', href: '/others' },
  ];

  function handleAdd(t: Omit<Transaction, 'id'>) {
    addTransaction(t);
  }

  function handleDelete(id: string) {
    removeTransaction(id);
  }

  function handleEdit() {
    alert('Funcionalidade de edição pode ser implementada aqui.');
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-10 font-sans">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <main className="flex  h-full flex-col items-center lg:items-start lg:flex-row gap-6 sm:gap-8 row-start-2 w-full py-6 max-w-7xl px-6 sm:px-[60]">
        <Menu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          routes={routes}
        />
        <div className="flex flex-col gap-6 lg:gap-8 w-full sm:max-w-[690]">
          <WelcomePannel />
          <NewTransaction onAdd={handleAdd} />
        </div>
        {loading ? (
          <div className="text-caption-600 bg-white w-full lg:h-dvh p-4 flex items-center justify-center">
            <p>Carregando transações...</p>
          </div>
        ) : (
          <TransactionList
            transactions={transactions}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}
