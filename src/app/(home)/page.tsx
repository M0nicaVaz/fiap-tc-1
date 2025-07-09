'use client';

import { Button, IconButton } from '@/components';
import { TrashIcon, PencilLineIcon } from '@phosphor-icons/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-10 font-sans">
      <header className="text-body-400">header aqui</header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="text-body-600">menu </section>
        <section className="text-subtitle-600">welcome</section>
        <section>
          <p className="text-subtitle">add transaction</p>
          <Button
            title="Concluir transação"
            onClick={() => console.log('oi')}
          />
          <Button
            disabled
            title="Cancelar transação"
            onClick={() => console.log('oi')}
          />
          <Button
            loading
            title="Cancelar transação"
            onClick={() => console.log('oi')}
          />
        </section>
        <section className="text-caption-600">
          summary
          <IconButton icon={TrashIcon} />
          <IconButton icon={PencilLineIcon} />
        </section>
      </main>
    </div>
  );
}
