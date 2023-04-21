// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingTwo from 'components/core/HeadingTwo';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingTwoProps } from 'components/core/HeadingTwo';

const BlogH2: FC<HeadingTwoProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <HeadingTwo
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
      </HeadingTwo>
    </>
  );
};

export default BlogH2;
