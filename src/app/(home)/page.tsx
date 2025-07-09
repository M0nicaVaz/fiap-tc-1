export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-10 font-sans">
      <header className="text-body-400">header aqui</header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="text-body-600">menu </section>
        <section className="text-subtitle-600">welcome</section>
        <section>
          <p className="text-subtitle bg-highlight">add transaction</p>
        </section>
        <section className="text-caption-600">summary</section>
      </main>
    </div>
  );
}
