export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className='flex flex-col'>
      {label && (
        <label className='mb-1 text-body-600 text-sm text-foreground-400'>
          {label}
        </label>
      )}
      <input
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-sm border border-solid bg-white px-4 py-2 text-left text-body-600 text-sm text-foreground-400 transition-all duration-200 placeholder:text-foreground-400/50 focus:border-transparent focus:ring focus:ring-foreground-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-80`}
        {...props}
      />
    </div>
  );
}
