// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import MoreHorizIcon from 'components/icon/MoreHoriz';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface MoreIconButtonProps extends IconButtonProps {}

const MoreIconButton: FC<MoreIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='More Horizontal' {...otherProps}>
      <MoreHorizIcon />
    </IconButton>
  );
};

export default MoreIconButton;
