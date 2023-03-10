// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatIndentIncreaseIcon from 'components/icon/IndentIncrease';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface IndentIncreaseIconButtonProps extends IconButtonProps {}

const IndentIncreaseIconButton: FC<IndentIncreaseIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Indent Increase' {...otherProps}>
      <FormatIndentIncreaseIcon />
    </IconButton>
  );
};

export default IndentIncreaseIconButton;
