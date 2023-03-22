// Types
import type { ThemeOptions } from '@mui/material';

// Custom Utilities
import commonThemeOptions from '../common';

const darkThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    primary: { main: '#4cb5f5', contrastText: '#fff' },
    secondary: { main: '#b3c100', contrastText: '#000' },
  },
};

export default darkThemeOptions;
