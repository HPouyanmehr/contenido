// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatAlignCenterIcon from 'components/icon/AlignCenter';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface AlignCenterIconButtonProps extends IconButtonProps {}

const AlignCenterIconButton: FC<AlignCenterIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Align Center' {...otherProps}>
      <FormatAlignCenterIcon />
    </IconButton>
  );
};

export default AlignCenterIconButton;
