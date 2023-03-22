import * as React from 'react';

// Types
import type { FC, ReactNode } from 'react';

// Custom Reducers
import themeModeReducer from 'store/reducer/themeMode';

// Custom Types
import type { ThemeModeContextProps } from 'types/dispatch/themeMode';

interface ThemeModeContextProviderProps {
  children?: ReactNode;
}

export const initialThemeModeContext: ThemeModeContextProps = {
  mode: 'dark',
  dispatch: () => null,
};

export const ThemeModeContext = React.createContext(initialThemeModeContext);

export const useThemeModeContext = () => React.useContext(ThemeModeContext);

export const useThemeModeReducer = () => {
  const { mode } = useThemeModeContext();

  return React.useReducer(themeModeReducer, mode);
};

export const ThemeModeContextProvider: FC<ThemeModeContextProviderProps> = (
  props
) => {
  // Props
  const { children } = props;

  // Hooks
  const [mode, dispatch] = useThemeModeReducer();

  return (
    <ThemeModeContext.Provider value={{ mode, dispatch }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeContextProvider;
