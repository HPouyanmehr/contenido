// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatIndentDecreaseIcon from 'components/icon/IndentDecrease';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface IndentDecreaseIconButtonProps extends IconButtonProps {}

const IndentDecreaseIconButton: FC<IndentDecreaseIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Indent Decrease' {...otherProps}>
      <FormatIndentDecreaseIcon />
    </IconButton>
  );
};

export default IndentDecreaseIconButton;
