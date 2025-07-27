'use client';
import { CaretDownIcon } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useRef, useState } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: SelectOption;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'Selecione uma opção',
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SelectOption>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleSelect(option: SelectOption) {
    if (disabled) return;
    setSelectedValue(option);
    setIsOpen(false);
    if (onChange != null) onChange(option.value);
  }

  function toggleDropdown() {
    if (disabled) return;
    setIsOpen(prev => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (value) setSelectedValue(value);
  }, [value]);

  return (
    <div className={'relative'} ref={dropdownRef}>
      <button
        type='button'
        onClick={toggleDropdown}
        disabled={disabled}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-solid bg-white px-4 py-2 text-left text-body-400 text-sm text-foreground-400 transition-all duration-200 focus:border-transparent focus:ring focus:ring-foreground-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-80`}
      >
        <span
          className={
            selectedValue
              ? 'text-body-600'
              : 'text-body-400 text-foreground-400/80'
          }
        >
          {selectedValue ? selectedValue.label : placeholder}
        </span>

        <CaretDownIcon
          weight='fill'
          className={`h-4 w-4 transition-transform ${isOpen && 'rotate-180'}`}
        />
      </button>

      {isOpen && (
        <ul
          role='listbox'
          className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg'
        >
          {options.map(option => (
            <li key={option.value}>
              <button
                type='button'
                onClick={() => handleSelect(option)}
                disabled={option.disabled}
                className={`w-full cursor-pointer px-4 py-2 text-start text-body-400 text-foreground-400 hover:bg-foreground-000 hover:text-body-600 focus:bg-foreground-000 focus:outline-none`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
