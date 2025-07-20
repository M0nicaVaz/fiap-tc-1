'use client';

import { XIcon } from '@phosphor-icons/react';
import { ReactNode } from 'react';
import { IconButton } from './IconButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      onClick={handleBackdropClick}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'
    >
      <div className='relative w-full max-w-lg rounded-lg bg-gray-000 p-4 shadow-lg'>
        <div className='flex items-center justify-between rounded-t border-b border-background-700 p-4'>
          <h3 className='text-title-700 text-foreground-400'>{title}</h3>
          <IconButton
            transparent
            icon={XIcon}
            onClick={onClose}
            title='Fechar'
          />
        </div>
        {children}
      </div>
    </div>
  );
}
