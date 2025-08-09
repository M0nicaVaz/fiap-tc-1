'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface LinkButtonProps {
  to: string;
  text: string;
  active?: boolean;
  disabled?: boolean;
}

export function LinkButton({ to, text, active, disabled }: LinkButtonProps) {
  const pathname = usePathname();
  const isActive = active ?? pathname === to;

  return (
    <Link
      title={disabled ? `${text} (Em breve)` : text}
      href={disabled ? '#' : to}
      aria-disabled={disabled}
      onClick={e => disabled && e.preventDefault()}
      className={`${isActive && 'text-body-600 text-foreground-400'} text-body-400 text-foreground-400 transition-colors hover:text-highlight ${disabled && 'cursor-not-allowed opacity-50'}`}
    >
      {text}
    </Link>
  );
}
