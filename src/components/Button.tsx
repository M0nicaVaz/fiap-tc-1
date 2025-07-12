import { Spinner } from './Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-foreground-400 text-body-600 text-white py-2 px-4 rounded-sm cursor-pointer transition-colors w-36 sm:max-w-46 sm:w-full  hover:bg-highlight disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Spinner /> : title}
    </button>
  );
}
