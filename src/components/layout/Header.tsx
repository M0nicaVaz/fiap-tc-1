'use client';
import { UserCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { Menu } from './Menu';

export function Header() {
  return (
    <header className='relative flex h-24 w-full items-center justify-end-safe gap-4 bg-foreground-400 px-6 font-sans'>
      <div className='absolute top-1/2 left-6 flex -translate-y-1/2 cursor-pointer items-center justify-center text-white xl:hidden'>
        <Menu.Button />
      </div>
      <span className='text-caption-600 text-white'>Visitante da Silva</span>
      <UserCircleIcon className='h-10 w-10 text-highlight' />
    </header>
  );
}
