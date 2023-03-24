// Custom Utilities
import commonThemeOptions from '../common';

// Custom Types
import type { CustomThemeOptions } from 'types/common/theme';

const darkThemeOptions: CustomThemeOptions = {
  ...commonThemeOptions,
  palette: {
    mode: 'dark',
    primary: { main: '#4cb5f5', contrastText: '#fff' },
    secondary: { main: '#b3c100', contrastText: '#000' },
    background: { default: '#000', paper: '#121212', card: '#121212' },
  },
};

export default darkThemeOptions;
