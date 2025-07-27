import { Button } from '@/components/ui';
import { Spinner } from '@/components/ui/Spinner';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Componentes/UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de carregamento.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InButton: Story = {
  render: () => <Button title='Carregando...' loading />,
};
