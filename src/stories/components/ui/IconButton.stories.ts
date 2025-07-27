import { IconButton } from '@/components/ui/IconButton';
import { TrashIcon } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

const meta = {
  title: 'Componentes/UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
      description: 'Nome do ícone do Phosphor Icons a ser exibido no botão',
    },
    iconWeight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
      description: 'Peso/estilo do ícone',
    },
    transparent: {
      control: 'boolean',
      description: 'Define se o botão tem fundo transparente',
    },
    iconColor: {
      control: false,
      description: 'Cor do ícone (classe CSS)',
    },
    variant: {
      control: 'select',
      options: ['small', 'regular'],
      description: 'Tamanho do botão [small: 24x24, regular: 40x40]',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o botão está desabilitado',
    },
    onClick: {
      action: 'clicked',
      description: 'Função chamada quando o botão é clicado',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: TrashIcon,
    variant: 'regular',
  },
};
export const Transparent: Story = {
  args: {
    icon: TrashIcon,
    transparent: true,
    variant: 'regular',
  },
};

export const Small: Story = {
  args: {
    icon: TrashIcon,
    variant: 'small',
  },
};
export const Disabled: Story = {
  args: {
    icon: TrashIcon,
    disabled: true,
    variant: 'regular',
  },
};

export const Interactive: Story = {
  args: {
    icon: TrashIcon,
    onClick: fn(() => alert('IconButton clicado!')),
    variant: 'regular',
  },
};
