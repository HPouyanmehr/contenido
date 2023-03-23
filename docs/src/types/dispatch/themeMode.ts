// Types
import type { Dispatch } from 'react';

// Custom Types
import type { ThemeMode } from 'types/common/theme';
import type { ThemeModeAction } from 'types/actions/themeMode';

export interface ThemeModeContextProps {
  mode: ThemeMode;
  toggleThemeMode: () => void;
  dispatch: Dispatch<ThemeModeAction>;
}
