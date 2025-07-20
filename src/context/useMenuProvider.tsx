'use client';

import { type ReactNode, createContext, useState } from 'react';

interface MenuContextProps {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const MenuContext = createContext({} as MenuContextProps);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const value = {
    isMenuOpen,
    openMenu,
    closeMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
