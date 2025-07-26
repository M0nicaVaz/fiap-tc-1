import { Icon, IconWeight } from '@phosphor-icons/react';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon;
  iconWeight?: IconWeight;
  transparent?: boolean;
  iconColor?: string;
  variant: 'small' | 'regular';
}

export function IconButton({
  icon: Icon,
  iconWeight = 'regular',
  transparent = false,
  variant = 'regular',
  iconColor,
  ...props
}: IconButtonProps) {
  const baseStyles: Record<string, string> = {
    bgColor: transparent ? 'bg-transparent' : 'bg-foreground-400',
    disabled: 'disabled:opacity-50',
    iconColor: transparent ? 'text-foreground-400' : 'text-foreground-000',
  };

  const variantStyles: Record<IconButtonProps['variant'], string> = {
    small: 'h-6 w-6',
    regular: 'h-10 w-10',
  };

  return (
    <button
      className={`flex ${variantStyles[variant]} group cursor-pointer items-center justify-center rounded-full text-body-600 transition-colors hover:bg-highlight hover:text-white disabled:cursor-not-allowed ${baseStyles.disabled} ${baseStyles.bgColor}`}
      {...props}
    >
      <Icon
        size={variant === 'small' ? 15 : 24}
        weight={iconWeight}
        className={`${iconColor || baseStyles.iconColor} transition-colors group-hover:text-white`}
      />
    </button>
  );
}
