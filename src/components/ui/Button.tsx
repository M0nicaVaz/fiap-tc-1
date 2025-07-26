import { Spinner } from './Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading, ...props }: ButtonProps) {
  return (
    <button
      className={`relative flex w-36 cursor-pointer items-center justify-center gap-2 rounded-md bg-foreground-400 px-4 py-2 text-body-600 text-white transition-colors hover:bg-highlight disabled:cursor-not-allowed disabled:bg-foreground-000 disabled:text-foreground-400 disabled:opacity-50 sm:w-full sm:max-w-46`}
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
