import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Types
import type { FC, ReactNode } from 'react';

// Custom Contexts
import ThemeModeContextProvider, {
  ThemeModeContext,
} from 'store/context/themeMode';

// Custom Utilities
import makeTheme from 'utilities/styling/theme';

// Custom Types
interface ContextProviderProps {
  children?: ReactNode;
}

const lightTheme = makeTheme('light');
const darkTheme = makeTheme('dark');

const ContextProvider: FC<ContextProviderProps> = (props) => {
  return (
    <>
      <ThemeModeContextProvider>
        <ThemeModeContext.Consumer>
          {({ mode }) => (
            <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          )}
        </ThemeModeContext.Consumer>
      </ThemeModeContextProvider>
    </>
  );
};

export default ContextProvider;
