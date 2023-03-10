// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import AddLinkIcon from 'components/icon/AddLink';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface LinkIconButtonProps extends IconButtonProps {}

const LinkIconButton: FC<LinkIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Add Link' {...otherProps}>
      <AddLinkIcon />
    </IconButton>
  );
};

export default LinkIconButton;
