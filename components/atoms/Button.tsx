import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

enum ButtonVariant {
  'default',
}

export type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function Button({
  children,
  className = '',
  variant = 'default',
  ...rest
}: ButtonProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'inline-flex rounded px-4 py-2 font-bold',
        'border border-gray-300 shadow-sm dark:border-gray-200',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu',
        'motion-reduce:hover:scale-400 motion-reduce:hover:brightness-90',
        'transition duration-100',
        'animate-shadow',
        {
          'bg-white text-gray-800 disabled:bg-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:disabled:bg-gray-700':
            variant === 'default',
        },
        className
      )}
    >
      <span className='capsize'>{children}</span>
    </UnstyledLink>
  );
}
