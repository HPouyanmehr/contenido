// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatBoldIcon from 'components/icon/Bold';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface BoldIconButtonProps extends IconButtonProps {}

const BoldIconButton: FC<BoldIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Bold' {...otherProps}>
      <FormatBoldIcon />
    </IconButton>
  );
};

export default BoldIconButton;
