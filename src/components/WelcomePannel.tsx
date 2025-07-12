'use client';
import { SquaresSVG, WelcomeSVG } from '@/assets/illustrations';
import { IconButton } from './IconButton';
import { EyeIcon } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';
import { EyeSlashIcon } from '@phosphor-icons/react';

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
    <section className="bg-foreground-400 rounded-sm h-[655px] sm:h-[402px] lg:w-[690px] w-full  relative flex items-start flex-col sm:flex-row p-8 gap-10 sm:justify-between">
      <SquaresSVG className="absolute top-0 sm:right-0" />
      <SquaresSVG className="absolute bottom-0 right-0 sm:left-0 rotate-180" />
      <WelcomeSVG className="absolute bottom-6 left-0 right-0 mx-auto sm:mx-0 sm:left-8" />

      <div className="flex gap-6 flex-col">
        <span className="text-title-600 text-white">Olá, Visitante!</span>
        <span className="text-caption-400 text-white capitalize">
          {today.toLocaleDateString('pt-BR', { weekday: 'long' })},{' '}
          {today.toLocaleDateString()}
        </span>
      </div>
      <div className="z-10 flex flex-col min-w-[180px] w-full sm:h-full justify-center  sm:max-w-[200px] text-white">
        <div className="flex gap-6 items-center">
          <span className="text-subtitle-600">Saldo</span>
          <IconButton
            onClick={toggleBalanceVisibility}
            icon={isBalanceVisible ? EyeIcon : EyeSlashIcon}
            iconWeight="duotone"
            transparent
          />
        </div>
        <div className="h-[2px] w-full bg-white rounded-sm my-4" />

        <div className="flex flex-col">
          <span className="text-body-400">Conta Corrente</span>
          <span className="text-highlight-000 ">{formattedBalance()}</span>
        </div>
      </div>
    </section>
  );
}
