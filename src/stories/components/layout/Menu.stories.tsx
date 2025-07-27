import { Menu } from '@/components/layout/Menu';
import { routes } from '@/constants/routes';
import { MenuProvider } from '@/context/useMenuProvider';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const MenuDemo = () => (
  <>
    <div className='w-full p-4 xl:hidden'>
      <Menu.Button />
    </div>
    <div className='max-w-1/4'>
      <Menu.Content routes={routes} />
    </div>
  </>
);

const meta = {
  title: 'Componentes/Layout/Menu',
  component: MenuDemo,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    docs: {
      description: {
        component:
          'Componente de menu de navegação com suporte a estados aberto/fechado no mobile.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MenuProvider>
        <div className='h-dvh bg-background-400'>
          <Story />
        </div>
      </MenuProvider>
    ),
  ],
} satisfies Meta<typeof MenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
