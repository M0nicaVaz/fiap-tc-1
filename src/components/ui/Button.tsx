import { Spinner } from './Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({
  title,
  loading,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: 'bg-foreground-400 text-white',
    secondary: 'bg-foreground-000 text-foreground-400',
  };

  return (
    <button
      className={`${variantStyles[variant]} relative flex w-36 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-body-600 transition-colors hover:bg-highlight hover:text-white disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400 disabled:opacity-50 sm:w-full sm:max-w-46`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <>
          <span>{title}</span> <Spinner />
        </>
      ) : (
        title
      )}
    </button>
  );
}
