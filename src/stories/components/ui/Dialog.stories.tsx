import { TransactionForm } from '@/components/transaction';
import { Button } from '@/components/ui';
import { Dialog } from '@/components/ui/Dialog';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

const meta = {
  title: 'Componentes/UI/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: 'Componente de dialog.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Define se o dialog está aberto',
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho do dialog',
    },
    children: {
      control: false,
      description: 'Conteúdo do dialog',
    },
    onClose: {
      action: 'closed',
      description: 'Função chamada quando o dialog é fechado',
    },
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen);

    return (
      <div className='flex h-[440px] items-center justify-center bg-background-400'>
        <Button title='Abrir dialog' onClick={() => setIsOpen(true)} />
        <Dialog
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Dialog exemplo',
    onClose: () => console.log('Dialog fechado'),
    children: (
      <>
        <div className='py-6'>
          <p>Aqui está o conteúdo do dialog.</p>
        </div>
      </>
    ),
  },
};

export const WithForm: Story = {
  args: {
    isOpen: true,
    title: 'Adicionar Item',
    onClose: () => console.log('Dialog fechado'),
    children: <TransactionForm />,
  },
};
