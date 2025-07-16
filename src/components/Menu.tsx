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
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 xl:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <nav
        className={`text-body-600 bg-white h-dvh w-64 fixed top-0 left-0 z-50 flex flex-col gap-4 p-8 shadow-lg transition-transform duration-200 xl:static xl:shadow-none xl:w-full xl:h-dvh xl:flex xl:flex-col xl:gap-0 xl:p-0 ${open ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0 xl:opacity-100 xl:pointer-events-auto`}
        style={{ minWidth: '200px' }}
        aria-label="Menu de navegação"
      >
        <button
          className="xl:hidden self-end mb-8 text-foreground-400"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <XIcon size={24} weight="bold" />
        </button>
        {routes.map((route) => (
          <LinkButton key={route.href} to={route.href} text={route.label} />
        ))}
      </nav>
    </>
  );
}
