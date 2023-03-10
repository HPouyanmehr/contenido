// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatListBulletedIcon from 'components/icon/ListBulleted';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface ListBulletedIconButtonProps extends IconButtonProps {}

const ListBulletedIconButton: FC<ListBulletedIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format List Bulleted' {...otherProps}>
      <FormatListBulletedIcon />
    </IconButton>
  );
};

export default ListBulletedIconButton;
