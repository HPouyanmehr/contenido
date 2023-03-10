// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatStrikethroughIcon from 'components/icon/Strikethrough';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface StrikethroughIconButtonProps extends IconButtonProps {}

const StrikethroughIconButton: FC<StrikethroughIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Strikethrough' {...otherProps}>
      <FormatStrikethroughIcon />
    </IconButton>
  );
};

export default StrikethroughIconButton;
