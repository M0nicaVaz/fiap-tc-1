'use client';

import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
  };
};
