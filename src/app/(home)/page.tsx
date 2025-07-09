import { Header } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-10 font-sans">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="text-body-600">menu </section>
        <section className="text-subtitle-600">welcome</section>
        <section>algo</section>
        <section className="text-caption-600">summary</section>
      </main>
    </div>
  );
}
