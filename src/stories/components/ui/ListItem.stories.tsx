import { IconButton, ListItem } from '@/components/ui';
import { HeartIcon } from '@phosphor-icons/react';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react/dist/ssr';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof ListItem> = {
  title: 'Componentes/UI/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do item',
      defaultValue: 'Título do item',
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo do item',
      defaultValue: 'Subtítulo',
    },
    info: {
      control: 'text',
      description: 'Informação adicional do item',
      defaultValue: 'Info',
    },
    actions: {
      control: false,
      description: 'Botões de ação.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => (
    <div className='bg-background-900 w-96 p-4'>
      <ul>
        <ListItem {...args} title='Item simples' info='Info' />
      </ul>
    </div>
  ),
};

export const WithSubtitles: Story = {
  render: args => (
    <div className='bg-background-900 w-96 p-4'>
      <ul>
        <ListItem {...args} title='Item simples' subtitle='Subtítulo' />
      </ul>
    </div>
  ),
};

export const WithInfo: Story = {
  render: args => (
    <div className='bg-background-900 w-96 p-4'>
      <ul>
        <ListItem {...args} title='Título' subtitle='Subtítulo' info='Info' />
      </ul>
    </div>
  ),
};

export const WithActions: Story = {
  render: args => (
    <div className='bg-background-900 w-96 p-4'>
      <ul>
        <ListItem
          {...args}
          title='Item com ações'
          actions={
            <>
              <IconButton
                title='Favoritar'
                icon={HeartIcon}
                onClick={() => alert('Favoritado')}
                iconColor='text-white'
                variant='small'
              />
            </>
          }
        />
      </ul>
    </div>
  ),
};

export const WithAllProps: Story = {
  render: args => (
    <div className='bg-background-900 w-96 p-4'>
      <ul>
        <ListItem
          {...args}
          title='Título do item'
          subtitle='R$ 1.234,56'
          info='27/07/2025'
          actions={
            <>
              <IconButton
                title='Editar'
                icon={PencilIcon}
                onClick={() => alert('Editando')}
                iconColor='text-white'
                variant='small'
              />
              <IconButton
                title='Excluir'
                icon={TrashIcon}
                onClick={() => alert('Excluindo')}
                iconColor='text-white'
                variant='small'
              />
            </>
          }
        />
      </ul>
    </div>
  ),
};
