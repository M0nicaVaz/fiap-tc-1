import { Icon, IconWeight } from '@phosphor-icons/react';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon;
  iconWeight?: IconWeight;
  transparent?: boolean;
  iconColor?: string;
  variant?: 'small' | 'regular';
}

export function IconButton({
  icon: Icon,
  iconWeight = 'regular',
  transparent = false,
  variant = 'regular',
  iconColor = 'text-foreground-400',
  ...props
}: IconButtonProps) {
  const variantStyles = {
    small: 'h-6 w-6',
    regular: 'h-10 w-10',
  };

  return (
    <button
      className={`flex ${variantStyles[variant]} group cursor-pointer items-center justify-center rounded-full text-body-600 transition-colors hover:bg-highlight hover:text-white disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400 ${
        transparent ? 'bg-transparent' : 'bg-foreground-400'
      }`}
      {...props}
    >
      <Icon
        size={variant === 'small' ? 15 : 24}
        weight={iconWeight}
        className={iconColor + ' transition-colors group-hover:text-white'}
      />
    </button>
  );
}
