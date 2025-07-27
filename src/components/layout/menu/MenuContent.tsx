'use client';
import { IconButton, LinkButton } from '@/components/ui';
import { Route } from '@/constants/routes';
import { useMenu } from '@/hooks';
import { XIcon } from '@phosphor-icons/react/dist/ssr';

export function MenuContent({ routes }: { routes: Route[] }) {
  const { closeMenu, isMenuOpen } = useMenu();

  const overlayStyles: Record<string, string> = {
    open: 'pointer-events-auto opacity-100',
    closed: 'pointer-events-none opacity-0 transition-all',
  };

  const navStyles: Record<string, string> = {
    borderRadius: isMenuOpen ? 'rounded-r-md' : 'rounded-md',
    transform: isMenuOpen ? 'translate-x-0' : '-translate-x-full',
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 xl:hidden ${isMenuOpen ? overlayStyles.open : overlayStyles.closed}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
      <nav
        className={`fixed top-0 left-0 z-50 flex h-dvh w-64 min-w-[200px] flex-col gap-3 bg-white p-8 text-body-600 shadow-lg transition-transform duration-200 lg:min-h-[915px] xl:pointer-events-auto xl:static xl:flex xl:w-full xl:translate-x-0 xl:flex-col xl:p-6 xl:opacity-100 xl:shadow-none ${navStyles.borderRadius} ${navStyles.transform}`}
        aria-label='Menu de navegação'
      >
        <div className={'self-end xl:hidden'}>
          <IconButton
            variant='regular'
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
