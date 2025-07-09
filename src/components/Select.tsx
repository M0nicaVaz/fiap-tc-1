import { CaretUpIcon } from '@phosphor-icons/react/dist/ssr';
import { useState, useRef, useEffect } from 'react';

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
    setIsOpen((prev) => !prev);
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
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`disabled:opacity-50 text-foreground-400 text-body-400 disabled:cursor-not-allowed cursor-pointer enabled:hover:border-primary-400 enabled:hover:bg-foreground-000 w-full text-left flex items-center justify-between gap-2 px-4 py-2 text-sm bg-white border border-solid border-border-400 rounded-lg focus:outline-none sm:min-w-80 focus:ring focus:ring-foreground-400 focus:border-transparent transition-all duration-200`}
      >
        <span className={selectedValue ? 'text-body-600' : 'text-gray-400'}>
          {selectedValue ? selectedValue.label : placeholder}
        </span>

        <CaretUpIcon
          weight="fill"
          className={`w-4 h-4 transition-transform ${isOpen && 'rotate-180'}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-border-400 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul role="listbox" className="py-1">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  disabled={option.disabled}
                  className={`cursor-pointer w-full text-left text-foreground-400 hover:text-body-600 text-body-400 hover:bg-foreground-000 focus:bg-foreground-000 focus:outline-none px-4 py-2`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
