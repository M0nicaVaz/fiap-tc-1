'use client';
import { SquaresSVG, WelcomeSVG } from '@/assets/illustrations';
import { EyeSlashIcon } from '@phosphor-icons/react';
import { EyeIcon } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';
import { IconButton } from './IconButton';

export function WelcomePannel() {
  const [isBalanceVisible, setIsBalanceVisible] = useState<boolean>(false);
  const [balance] = useState<string>('182,00');
  const today = new Date();

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prev: boolean) => !prev);
  };

  const formattedBalance = (): string => {
    if (isBalanceVisible) return balance;
    return balance.replace(/\d/g, '*');
  };

  return (
    <section className='relative flex h-[655px] w-full flex-col items-start gap-10 rounded-sm bg-foreground-400 p-8 sm:h-[402px] sm:flex-row sm:justify-between lg:w-[690px]'>
      <SquaresSVG className='absolute top-0 sm:right-0' />
      <SquaresSVG className='absolute right-0 bottom-0 rotate-180 sm:left-0' />
      <WelcomeSVG className='absolute right-0 bottom-6 left-0 mx-auto sm:left-8 sm:mx-0' />

      <div className='flex flex-col gap-6'>
        <span className='text-title-600 text-white'>Olá, Visitante!</span>
        <span className='text-caption-400 text-white capitalize'>
          {today.toLocaleDateString('pt-BR', { weekday: 'long' })},{' '}
          {today.toLocaleDateString()}
        </span>
      </div>
      <div className='z-10 flex w-full min-w-[180px] flex-col justify-center text-white sm:h-full sm:max-w-[200px]'>
        <div className='flex items-center gap-6'>
          <span className='text-subtitle-600'>Saldo</span>
          <IconButton
            onClick={toggleBalanceVisibility}
            icon={isBalanceVisible ? EyeIcon : EyeSlashIcon}
            iconWeight='duotone'
            transparent
          />
        </div>
        <div className='my-4 h-[2px] w-full rounded-sm bg-white' />

        <div className='flex flex-col'>
          <span className='text-body-400'>Conta Corrente</span>
          <span className='text-highlight-400'>{formattedBalance()}</span>
        </div>
      </div>
    </section>
  );
}
