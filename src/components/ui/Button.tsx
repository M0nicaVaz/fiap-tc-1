import { Spinner } from '@phosphor-icons/react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...props }: ButtonProps) {
  return (
    <button
      className={`w-36 cursor-pointer rounded-sm bg-foreground-400 px-4 py-2 text-body-600 text-white transition-colors hover:bg-highlight disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400 sm:w-full sm:max-w-46`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Spinner /> : title}
    </button>
  );
}
