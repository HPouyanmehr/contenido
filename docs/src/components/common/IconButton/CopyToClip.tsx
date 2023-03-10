// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import ContentCopyIcon from 'components/icon/ContentCopy';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface CopyToClipProps extends IconButtonProps {}

const CopyToClip: FC<CopyToClipProps> = (props) => {
  // Props
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Copy To Clipboard' {...otherProps}>
      <ContentCopyIcon />
    </IconButton>
  );
};

export default CopyToClip;
