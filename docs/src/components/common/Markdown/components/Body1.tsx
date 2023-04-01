// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';

// CUstom Types
import { BodyOneProps } from 'components/core/BodyOne';

const MarkdownBody1: FC<BodyOneProps> = (props) => {
  // Props
  const {
    children,
    gutterBottom = true,
    lineHeight = 1.8,
    ...otherProps
  } = props;

  return (
    <BodyOne
      gutterBottom={gutterBottom}
      lineHeight={lineHeight}
      {...otherProps}
    >
      {children}
    </BodyOne>
  );
};

export default MarkdownBody1;
