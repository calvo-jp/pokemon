import * as React from 'react';

interface CreateContextProps {
  name: string;
  hookName: string;
  providerName: string;
  strict?: boolean;
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export function createContext<T>(props: CreateContextProps) {
  const Context = React.createContext<T>({} as any);

  const useContext = () => {
    const context = React.useContext(Context);

    if (!context && props.strict) {
      const error = new Error();

      error.name = 'ContextError';
      error.message = `'${props.hookName}' returned undefined. Seems you forgot to wrap your component in '${props.providerName}'`;

      Error.captureStackTrace?.(error);

      throw error;
    }

    return context;
  };

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
