// Types
import type { ThemeOptions } from '@mui/material';

// Custom Utilities
import commonThemeOptions from '../common';

// Custom Types
import type { CustomThemeOptions } from 'types/common/theme';

const lightThemeOptions: CustomThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: 'light',
    primary: { main: '#4cb5f5', contrastText: '#fff' },
    secondary: { main: '#b3c100', contrastText: '#000' },
    background: { paper: '#fff', default: '#fff', card: '#edf7fe' },
  },
};

export default lightThemeOptions;
