// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import HeadingTwo from 'components/core/HeadingTwo';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingTwoProps } from 'components/core/HeadingTwo';
import Box from 'components/core/Box';
import BodyOne from 'components/core/BodyOne';
export interface BlockquoteProps {
  children?: ReactNode;
}

const Blockquote: FC<BlockquoteProps> = (props) => {
  // Props
  const { children } = props;

  return (
    <Box
      component='blockquote'
      sx={{
        borderLeft: '3px solid',
        borderColor: 'text.secondary',
        m: '0.25rem 0',
        pl: '1.5rem',
      }}
    >
      {children}
    </Box>
  );
};

export default Blockquote;
