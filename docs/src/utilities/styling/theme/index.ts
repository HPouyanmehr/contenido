import { createTheme } from '@mui/material/styles';

// Custom Utilities
import darkThemeOptions from 'utilities/styling/theme/dark';
import lightThemeOptions from 'utilities/styling/theme/light';

// Custom Types
import type { ThemeMode } from 'types/common/theme';

const makeTheme = (mode?: ThemeMode) =>
  createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);

export default makeTheme;
