// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import AddPhotoAlternateIcon from 'components/icon/AddPhoto';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface PhotoIconButtonProps extends IconButtonProps {}

const PhotoIconButton: FC<PhotoIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Add Photo Alternate' {...otherProps}>
      <AddPhotoAlternateIcon />
    </IconButton>
  );
};

export default PhotoIconButton;
