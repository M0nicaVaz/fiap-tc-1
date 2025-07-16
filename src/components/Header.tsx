import { UserCircleIcon, ListIcon } from '@phosphor-icons/react/dist/ssr';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-24 gap-4 bg-foreground-400 w-full flex items-center justify-end-safe px-6 relative">
      <button
        className="cursor-pointer xl:hidden absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-white"
        onClick={onMenuClick}
        aria-label="Abrir menu"
      >
        <ListIcon size={24} weight="bold" className="text-highlight" />
      </button>
      <span className="text-caption-600 text-white">Visitante da Silva</span>
      <UserCircleIcon className="text-highlight w-10 h-10" />
    </header>
  );
}
