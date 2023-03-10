// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatAlignRightIcon from 'components/icon/AlignRight';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface AlignRightIconButtonProps extends IconButtonProps {}

const AlignRightIconButton: FC<AlignRightIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Align Right' {...otherProps}>
      <FormatAlignRightIcon />
    </IconButton>
  );
};

export default AlignRightIconButton;
