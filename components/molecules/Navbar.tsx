import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import * as React from 'react';

import StyledLink from '@/components/atoms/StyledLink';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <StyledLink
      href={href}
      isActive={isActive}
      variant='one'
      className='hidden md:inline-block'
    >
      <span className='capsize'>{text}</span>
    </StyledLink>
  );
}

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  return (
    <div className='flex flex-col justify-center px-8 fixed w-full mt-[-5px] bg-gray-50/80  dark:bg-gray-900/80 backdrop-blur z-[999]'>
      <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-8 text-gray-900 dark:text-gray-100'>
        <a href='#skip' className='skip-nav'>
          Skip to content
        </a>
        <div className='ml-[-0.60rem]'>
          <Link href='/'>
            <a className='md:inline-block mr-4 text-xl font-bold tracking-tight text-black dark:text-white p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'>
              RizkianAkbar
            </a>
          </Link>
          <NavItem href='/' text='Home' />
        </div>
        <div className='flex items-center justify-center'>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-9 h-9 mr-10 md:mr-0 bg-gray-200 rounded-lg dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all'
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                className='w-5 h-5 text-gray-800 dark:text-gray-200 mx-auto'
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
