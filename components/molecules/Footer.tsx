import * as React from 'react';

import StyledLink from '@/components/atoms/StyledLink';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import SignatureIcon from '@/components/icons/SignatureIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-3 pb-16 sm:grid-cols-4 gap-4'>
        <div className='sm:flex flex-col hidden sm:visible'>
          <SignatureIcon />
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <StyledLink href='/'>Home</StyledLink>
          <StyledLink href='/about'>About</StyledLink>
          <StyledLink href='/project'> Project</StyledLink>
          <StyledLink href='/blog'>Blog</StyledLink>
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <StyledLink openNewTab href='https://github.com/rizkianakbar'>
            <GithubIcon className='hidden sm:inline' />
            GitHub
          </StyledLink>
          <StyledLink openNewTab href='https://twitter.com/rizkianakbr'>
            <TwitterIcon className='hidden sm:inline' />
            Twitter
          </StyledLink>
          <StyledLink
            openNewTab
            href='https://www.linkedin.com/in/rizkianakbar'
          >
            <LinkedinIcon className='hidden sm:inline' />
            LinkedIn
          </StyledLink>
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%] '>
          <StyledLink openNewTab href='https://quranmemo.vercel.app'>
            QuranMemo
          </StyledLink>
          <StyledLink openNewTab href='https://github.com/rizkianakbar'>
            Galen
          </StyledLink>
        </div>
      </div>
    </footer>
  );
}
