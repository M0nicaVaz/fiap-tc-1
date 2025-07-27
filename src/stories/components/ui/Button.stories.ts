import { Button } from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

const meta = {
  title: 'Componentes/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'O texto exibido no botão',
    },
    loading: {
      control: 'boolean',
      description: 'Define se o botão está em estado de carregamento',
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Botão',
  },
};

export const Loading: Story = {
  args: {
    title: 'Carregando...',
    loading: true,
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Desabilitado',
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    title: 'Clique aqui',
    onClick: fn(() => alert('Botão clicado!')),
  },
};
