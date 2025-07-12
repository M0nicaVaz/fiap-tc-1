import {
  Header,
  Menu,
  NewTransaction,
  TransactionList,
  WelcomePannel,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pb-10 font-sans">
      <Header />
      <main className="flex  h-full flex-col items-center lg:items-start lg:flex-row gap-6 sm:gap-8 row-start-2 w-full py-6 max-w-7xl px-6 sm:px-[60]">
        <Menu />
        <div className="flex flex-col gap-6 lg:gap-8 w-full sm:max-w-[690]">
          <WelcomePannel />
          <NewTransaction />
        </div>
        <TransactionList />
      </main>
    </div>
  );
}
