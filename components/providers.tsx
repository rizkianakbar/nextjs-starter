'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { FC, ReactNode, Suspense } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}

      <Suspense fallback={null}>
        <ProgressBar
          height='4px'
          color='#fffd00'
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
};

export default Providers;
