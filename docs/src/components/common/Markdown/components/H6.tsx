// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingSix from 'components/core/HeadingSix';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingSixProps } from 'components/core/HeadingSix';

const MarkdownH6: FC<HeadingSixProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <HeadingSix
        sx={{
          margin: '1.75em 0 0.83em',
          ':hover': {
            '& a': {
              display: 'inline-block',
            },
          },
          ...sx,
        }}
        {...otherProps}
      >
        {children}{' '}
        {children && (
          <Link
            color='divider'
            href={`#${fixHref(children.toString())}`}
            sx={{ display: 'none' }}
          >
            #
          </Link>
        )}
      </HeadingSix>
    </>
  );
};

export default MarkdownH6;
