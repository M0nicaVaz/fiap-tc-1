import { Icon, IconWeight } from '@phosphor-icons/react';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon;
  iconWeight: IconWeight;
  transparent: boolean;
}

export function IconButton({
  icon: Icon,
  iconWeight,
  transparent,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-body-600 text-white transition-colors hover:bg-highlight disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400 ${
        transparent ? 'bg-transparent' : 'bg-foreground-400'
      }`}
      {...props}
    >
      <Icon size={24} weight={iconWeight} />
    </button>
  );
}
