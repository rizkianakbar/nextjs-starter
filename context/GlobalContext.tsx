import * as React from 'react';

export interface GlobalProviderProps {
  children: JSX.Element;
}
export interface DataGlobalStateInterface {
  preloaded: boolean;
  navIsActive: boolean;
  setNavIsActive: (value: boolean) => void;
}

export interface GlobalStateInterface {
  globalState: DataGlobalStateInterface;
}

export function createCtx<GlobalStateInterface>() {
  const ctx = React.createContext<GlobalStateInterface | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useGlobalContext, CtxProvider] =
  createCtx<GlobalStateInterface>();

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);
  const [navIsActive, setNavIsActive] = React.useState<boolean>(false);

  const dataGlobalState: DataGlobalStateInterface = {
    preloaded,
    navIsActive,
    setNavIsActive,
  };

  const globalState: GlobalStateInterface = {
    globalState: dataGlobalState,
  };

  return <CtxProvider value={globalState}>{children}</CtxProvider>;
};
