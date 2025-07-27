import { Header } from '@/components/layout/Header';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Componentes/Layout/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'Componente de cabeçalho da aplicação com botão de menu e informações do usuário.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Desktop: Story = {};
