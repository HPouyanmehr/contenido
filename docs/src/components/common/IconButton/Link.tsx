// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import AddLinkIcon from 'components/icon/AddLink';
import LinkOffIcon from 'components/icon/LinkOff';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface LinkIconButtonProps extends IconButtonProps {
  mode?: 'add' | 'remove';
}

const LinkIconButton: FC<LinkIconButtonProps> = (props) => {
  const { mode = 'add', ...otherProps } = props;

  return (
    <IconButton aria-label='Add Link' {...otherProps}>
      {mode === 'add' ? <AddLinkIcon /> : <LinkOffIcon />}
    </IconButton>
  );
};

export default LinkIconButton;
