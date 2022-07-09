import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

enum ButtonVariant {
  'default',
  'one',
  'two',
}

export type StyledLinkProps = {
  variant?: keyof typeof ButtonVariant;
  isActive?: boolean;
} & UnstyledLinkProps;

export default function StyledLink({
  children,
  className = '',
  variant = 'default',
  isActive,
  ...rest
}: StyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        className,
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'text-gray-400 dark:text-gray-400',
        variant === 'one'
          ? 'p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
          : variant === 'two'
          ? 'focus:outline-none focus-visible:ring focus-visible:ring-primary-300 scale-100 hover:scale-[1.5] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-400 motion-reduce:hover:brightness-90 transition duration-100 animate-shadow dark:border-gray-700 text-gray-900 dark:text-gray-100 text-xl font-bold'
          : 'text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition'
      )}
    >
      {children}
    </UnstyledLink>
  );
}
