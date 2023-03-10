// Types
import type { ThemeOptions } from '@mui/material';

// Custom Utilities
import commonThemeOptions from '../common';

const lightThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    primary: { main: '#4cb5f5', contrastText: '#fff' },
    secondary: { main: '#b3c100', contrastText: '#000' },
  },
};

export default lightThemeOptions;
