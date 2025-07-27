import { Input } from '@/components/form/Input';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Componentes/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo exibido acima do campo de entrada',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder do input',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o input está desabilitado',
    },
    type: {
      control: 'select',
      options: ['text', 'number'],
      description: 'Tipo do input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite aqui...',
  },
};

export const Number: Story = {
  args: {
    label: 'Valor',
    type: 'number',
    placeholder: '0,00',
    step: '0.01',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Este campo está desabilitado',
    disabled: true,
  },
};
