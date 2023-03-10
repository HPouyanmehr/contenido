import * as React from 'react';

// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import MenuIcon from 'components/icon/Menu';
import MenuOpenIcon from 'components/icon/MenuOpen';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface MenuTogglerProps extends IconButtonProps {}

const MenuToggler: FC<MenuTogglerProps> = (props) => {
  // Props
  const { onClick, ...otherProps } = props;

  // States
  const [open, setOpen] = React.useState<boolean>(false);

  // Utilities
  const toggleOpen = (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpen(!open);
    if (onClick && event) onClick(event);
  };

  return (
    <IconButton
      aria-label='Sidebar Menu Toggler'
      onClick={(e) => toggleOpen()}
      {...otherProps}
    >
      {open ? <MenuOpenIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default MenuToggler;
