// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatListNumberedIcon from 'components/icon/ListNumbered';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface ListBulletedIconButtonProps extends IconButtonProps {}

const ListNumberedIconButton: FC<ListBulletedIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format List Numbered' {...otherProps}>
      <FormatListNumberedIcon />
    </IconButton>
  );
};

export default ListNumberedIconButton;
