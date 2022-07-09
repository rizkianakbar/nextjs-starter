import * as React from 'react';

import { useGlobalContext } from '@/context/GlobalContext';

export default function useLoaded() {
  const {
    globalState: { preloaded },
  } = useGlobalContext();

  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }
  }, [preloaded]);

  return isLoaded;
}
