import { LinkButton } from '@/components/ui/NavigationLink';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Componentes/UI/NavigationLink',
  component: LinkButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de link de navegação com estado ativo baseado na rota atual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: 'text',
      description: 'URL de destino do link',
    },
    text: {
      control: 'text',
      description: 'Texto exibido no link',
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: '/',
    text: 'Dashboard',
  },
};

export const Active: Story = {
  args: {
    to: '/',
    text: 'Início',
    active: true,
  },
};
