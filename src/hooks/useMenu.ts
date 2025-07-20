'use client';

import { MenuContext } from '@/context/useMenuProvider';
import { useContext } from 'react';

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Provider fora do escopo.');
  }

  return context;
};
