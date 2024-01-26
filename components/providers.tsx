'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { FC, ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}

      <ProgressBar
        height='4px'
        color='#fffd00'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
