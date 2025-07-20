import { Menu } from '@/components/layout';
import {
  TransactionList,
  TransactionSection,
  WelcomePannel,
} from '@/components/transaction';
import { routes } from '@/constants/routes';

export default function Home() {
  return (
    <main className='row-start-2 flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 pb-10 font-sans sm:gap-8 sm:px-[60] lg:flex-row lg:items-start'>
      <Menu routes={routes} />
      <div className='flex w-full flex-col gap-6 sm:max-w-[690] lg:gap-8'>
        <WelcomePannel />
        <TransactionSection />
      </div>
      <TransactionList />
    </main>
  );
}
