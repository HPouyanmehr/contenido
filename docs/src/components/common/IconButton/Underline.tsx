// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatUnderlinedIcon from 'components/icon/Underlined';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface UnderlinedIconButtonProps extends IconButtonProps {}

const UnderlinedIconButton: FC<UnderlinedIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Underlined' {...otherProps}>
      <FormatUnderlinedIcon />
    </IconButton>
  );
};

export default UnderlinedIconButton;
