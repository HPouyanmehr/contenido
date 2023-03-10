// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatAlignLeftIcon from 'components/icon/AlignLeft';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface AlignLeftIconButtonProps extends IconButtonProps {}

const AlignLeftIconButton: FC<AlignLeftIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Align Left' {...otherProps}>
      <FormatAlignLeftIcon />
    </IconButton>
  );
};

export default AlignLeftIconButton;
