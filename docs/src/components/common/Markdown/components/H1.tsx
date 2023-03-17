// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingOne from 'components/core/HeadingOne';

// CUstom Types
import { HeadingOneProps } from 'components/core/HeadingOne';

const MarkdownH1: FC<HeadingOneProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <HeadingOne sx={{ margin: '0.67em 0 0.5em', ...sx }} {...otherProps}>
      {children}
    </HeadingOne>
  );
};

export default MarkdownH1;
