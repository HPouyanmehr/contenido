// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import DarkModeIcon from 'components/icon/DarkMode';
import LightModeIcon from 'components/icon/LightMode';

// Custom Hooks
import { useThemeModeContext } from 'store/context/themeMode';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface ThemeTogglerIconButtonProps extends IconButtonProps {}

const ThemeTogglerIconButton: FC<ThemeTogglerIconButtonProps> = (props) => {
  // Hooks
  const { mode, toggleThemeMode } = useThemeModeContext();

  return (
    <IconButton aria-label='Theme Toggler' onClick={toggleThemeMode} {...props}>
      {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeTogglerIconButton;
