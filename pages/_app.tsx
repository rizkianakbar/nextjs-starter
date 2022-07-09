import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';

import '@/styles/nrprogress.css';
import '@/styles/globals.css';

import { GlobalProvider } from '@/context/GlobalContext';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
