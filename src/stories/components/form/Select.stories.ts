import { Select } from '@/components/form/Select';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Componentes/Form/Select',

  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array de opções disponíveis para seleção',
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando nenhuma opção está selecionada',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o select está desabilitado',
    },
    onChange: {
      action: 'changed',
      description: 'Função chamada quando uma opção é selecionada',
    },
    value: {
      control: false,
      description: 'Valor selecionado no select',
      table: {
        type: { summary: 'SelectOption' },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const categoryOptions = [
  { value: 'receita', label: 'Receita' },
  { value: 'despesa', label: 'Despesa' },
  { value: 'investimento', label: 'Investimento' },
];

export const Default: Story = {
  args: {
    options: categoryOptions,
    placeholder: 'Selecione uma opção',
  },
};

export const Disabled: Story = {
  args: {
    options: categoryOptions,
    placeholder: 'Select desabilitado',
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    options: categoryOptions,
    placeholder: 'Selecione uma opção',
    onChange: value => alert(`Opção selecionada: ${value}`),
  },
};

export const WithInitialValue: Story = {
  args: {
    options: categoryOptions,
    value: categoryOptions[0],
    placeholder: 'Selecione uma categoria',
  },
};
