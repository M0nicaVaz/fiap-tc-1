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

export const Desktop: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div className='flex items-center justify-center [&_button]:hidden'>
      <Header />
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className='flex w-sm items-center justify-center [&_button]:block'>
      <Header />
    </div>
  ),
};
