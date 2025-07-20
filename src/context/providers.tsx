import { MenuProvider } from './useMenuProvider';
import { TransactionProvider } from './useTransactionProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TransactionProvider>
      <MenuProvider>{children}</MenuProvider>
    </TransactionProvider>
  );
}
