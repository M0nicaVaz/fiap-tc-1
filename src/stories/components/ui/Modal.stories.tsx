import { TransactionForm } from '@/components/transaction';
import { Button } from '@/components/ui';
import { Modal } from '@/components/ui/Modal';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

const meta = {
  title: 'Componentes/UI/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Componente de modal/popup com overlay e botão de fechar.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Define se o modal está aberto',
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho do modal',
    },
    children: {
      control: false,
      description: 'Conteúdo do modal',
    },
    onClose: {
      action: 'closed',
      description: 'Função chamada quando o modal é fechado',
    },
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen);

    return (
      <div className='flex h-[440px] items-center justify-center bg-background-400'>
        <Button title='Abrir modal' onClick={() => setIsOpen(true)} />
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            args.onClose?.();
          }}
        />
      </div>
    );
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal exemplo',
    onClose: () => console.log('Modal fechado'),
    children: (
      <>
        <div className='py-6'>
          <p>Aqui está o conteúdo do modal.</p>
        </div>
      </>
    ),
  },
};

export const WithForm: Story = {
  args: {
    isOpen: true,
    title: 'Adicionar Item',
    onClose: () => console.log('Modal fechado'),
    children: <TransactionForm />,
  },
};
