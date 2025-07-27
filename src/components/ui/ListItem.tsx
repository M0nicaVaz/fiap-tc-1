import { ReactNode } from 'react';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  info?: string;
  actions?: ReactNode;
}

export function ListItem({ title, subtitle, info, actions }: ListItemProps) {
  return (
    <li
      className={`flex w-full flex-col items-center justify-between gap-2 border-b border-b-background-700 pb-2`}
    >
      <div className='flex w-full items-center justify-between gap-2'>
        <span className='text-body-400'>{title}</span>
        {actions && <div className={`flex gap-1`}>{actions}</div>}
      </div>

      {subtitle && (
        <div className='flex w-full items-center justify-between gap-2'>
          <span className='text-body-600 text-foreground-400'>{subtitle}</span>
          {info && (
            <span className='text-caption-400 text-foreground-400/50'>
              {info}
            </span>
          )}
        </div>
      )}
    </li>
  );
}
