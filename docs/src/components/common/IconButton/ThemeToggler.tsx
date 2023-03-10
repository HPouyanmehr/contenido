// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import DarkModeIcon from 'components/icon/DarkMode';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface ThemeTogglerIconButtonProps extends IconButtonProps {}

const ThemeTogglerIconButton: FC<ThemeTogglerIconButtonProps> = (props) => {
  return (
    <IconButton aria-label='Theme Toggler' {...props}>
      <DarkModeIcon />
    </IconButton>
  );
};

export default ThemeTogglerIconButton;
