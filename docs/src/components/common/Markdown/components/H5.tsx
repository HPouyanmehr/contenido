// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingFive from 'components/core/HeadingFive';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingFiveProps } from 'components/core/HeadingFive';

const MarkdownH5: FC<HeadingFiveProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <HeadingFive
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
      </HeadingFive>
    </>
  );
};

export default MarkdownH5;
