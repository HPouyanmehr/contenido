// Types
import type { FC } from 'react';

// Custom Core Components
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import FormatItalicIcon from 'components/icon/Italic';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface ItalicIconButtonProps extends IconButtonProps {}

const ItalicIconButton: FC<ItalicIconButtonProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <IconButton aria-label='Format Italic' {...otherProps}>
      <FormatItalicIcon />
    </IconButton>
  );
};

export default ItalicIconButton;
