'use client';
import { useMenu } from '@/hooks';
import { ListIcon, UserCircleIcon } from '@phosphor-icons/react/dist/ssr';

export function Header() {
  const { openMenu } = useMenu();

  return (
    <header className='relative flex h-24 w-full items-center justify-end-safe gap-4 bg-foreground-400 px-6 font-sans'>
      <button
        className='absolute top-1/2 left-6 flex -translate-y-1/2 cursor-pointer items-center justify-center text-white xl:hidden'
        onClick={openMenu}
        aria-label='Abrir menu'
      >
        <ListIcon size={24} weight='bold' className='text-highlight' />
      </button>
      <span className='text-caption-600 text-white'>Visitante da Silva</span>
      <UserCircleIcon className='h-10 w-10 text-highlight' />
    </header>
  );
}
