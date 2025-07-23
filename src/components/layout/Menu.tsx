'use client';
import { useMenu } from '@/hooks';
import { XIcon } from '@phosphor-icons/react/dist/ssr';
import { IconButton } from '../ui';
import { LinkButton } from '../ui/NavigationLink';

interface Route {
  label: string;
  href: string;
}

interface MenuProps {
  routes: Route[];
}

export function Menu({ routes }: MenuProps) {
  const { closeMenu, isMenuOpen } = useMenu();
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 xl:hidden ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
      <nav
        className={`${isMenuOpen && 'h-dvh'} fixed top-0 left-0 z-50 flex w-64 flex-col gap-3 ${isMenuOpen ? 'rounded-r-md' : 'rounded-md'} 6 bg-white p-8 text-body-600 shadow-lg transition-transform duration-200 lg:min-h-[915px] xl:static xl:flex xl:w-full xl:flex-col xl:p-6 xl:shadow-none ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} xl:pointer-events-auto xl:translate-x-0 xl:opacity-100`}
        style={{ minWidth: '200px' }}
        aria-label='Menu de navegação'
      >
        <div className='self-end xl:hidden'>
          <IconButton
            transparent
            icon={XIcon}
            onClick={closeMenu}
            title='Fechar'
          />
        </div>
        {routes.map(route => (
          <LinkButton key={route.href} to={route.href} text={route.label} />
        ))}
      </nav>
    </>
  );
}
