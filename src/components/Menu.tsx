import { XIcon } from '@phosphor-icons/react/dist/ssr';
import { LinkButton } from './NavigationLink';

interface Route {
  label: string;
  href: string;
}

interface MenuProps {
  open: boolean;
  onClose: () => void;
  routes: Route[];
}

export function Menu({ open, onClose, routes }: MenuProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 xl:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <nav
        className={`fixed top-0 left-0 z-50 flex h-dvh w-64 flex-col gap-3 bg-white p-8 text-body-600 shadow-lg transition-transform duration-200 xl:static xl:flex xl:h-dvh xl:w-full xl:flex-col xl:p-6 xl:shadow-none ${open ? 'translate-x-0' : '-translate-x-full'} xl:pointer-events-auto xl:translate-x-0 xl:opacity-100`}
        style={{ minWidth: '200px' }}
        aria-label='Menu de navegação'
      >
        <button
          className='mb-8 cursor-pointer self-end text-foreground-400 hover:text-highlight xl:hidden'
          onClick={onClose}
          aria-label='Fechar menu'
        >
          <XIcon size={24} weight='bold' />
        </button>
        {routes.map(route => (
          <LinkButton key={route.href} to={route.href} text={route.label} />
        ))}
      </nav>
    </>
  );
}
