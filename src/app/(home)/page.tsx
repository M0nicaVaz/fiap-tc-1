'use client';
import {
  Header,
  Menu,
  NewTransaction,
  TransactionList,
  WelcomePannel,
} from '@/components';
import { useTransactions } from '@/hooks';
import { CreateTransactionDTO } from '@/lib/types/transaction';
import { useState } from 'react';

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

  function handleAdd(t: CreateTransactionDTO) {
    addTransaction(t);
  }

  function handleDelete(id: string) {
    removeTransaction(id);
  }

  function handleEdit() {
    alert('Funcionalidade de edição pode ser implementada aqui.');
  }

  return (
    <div className='flex min-h-screen flex-col items-center pb-10 font-sans'>
      <Header onMenuClick={() => setMenuOpen(true)} />
      <main className='row-start-2 flex h-full w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 sm:gap-8 sm:px-[60] lg:flex-row lg:items-start'>
        <Menu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          routes={routes}
        />
        <div className='flex w-full flex-col gap-6 sm:max-w-[690] lg:gap-8'>
          <WelcomePannel />
          <NewTransaction onAdd={handleAdd} />
        </div>
        {loading ? (
          <div className='flex w-full items-center justify-center bg-white p-4 text-caption-600 lg:h-dvh'>
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
