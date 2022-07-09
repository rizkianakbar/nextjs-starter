import type { NextPage } from 'next';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout';
import ComingSoon from '@/components/molecules/ComingSoon';

import { useGlobalContext } from '@/context/GlobalContext';

const Home: NextPage = () => {
  const {
    globalState: { navIsActive, setNavIsActive },
  } = useGlobalContext();

  React.useEffect(() => {
    setNavIsActive(false);
  }, [setNavIsActive]);
  const isLoaded = useLoaded();

  return (
    <React.Suspense fallback={null}>
      <Layout>
        <ComingSoon name='Home' />
      </Layout>
    </React.Suspense>
  );
};

export default Home;
