// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatAlignJustifyIcon from 'components/icon/AlignJustify';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface AlignJustifyIconButtonProps extends IconButtonProps {}

const AlignJustifyIconButton: FC<AlignJustifyIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Align Justify' {...otherProps}>
      <FormatAlignJustifyIcon />
    </IconButton>
  );
};

export default AlignJustifyIconButton;
