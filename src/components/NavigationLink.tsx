import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface LinkButtonProps {
  to: string;
  text: string;
}

export function LinkButton({ to, text }: LinkButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link href={to} className={`${isActive && 'text-'}`}>
      {text}
    </Link>
  );
}
