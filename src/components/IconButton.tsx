import { Icon } from '@phosphor-icons/react';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon;
}

export function IconButton({ icon: Icon, ...props }: IconButtonProps) {
  return (
    <button
      className={`flex items-center justify-center bg-foreground-400 text-body-600 text-white rounded-full cursor-pointer transition-colors w-10 h-10  hover:bg-highlight disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400`}
      {...props}
    >
      <Icon size={24} />
    </button>
  );
}
