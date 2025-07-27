'use client';
import { IconButton } from '@/components/ui';
import { useMenu } from '@/hooks';
import { ListIcon } from '@phosphor-icons/react/dist/ssr';

export function MenuButton() {
  const { openMenu } = useMenu();

  return (
    <IconButton
      variant='regular'
      transparent
      icon={ListIcon}
      onClick={openMenu}
      title='Abrir menu'
      iconColor='text-highlight'
      iconWeight='bold'
    />
  );
}
