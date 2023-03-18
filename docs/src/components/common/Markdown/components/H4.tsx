// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingFour from 'components/core/HeadingFour';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingFourProps } from 'components/core/HeadingFour';

const MarkdownH4: FC<HeadingFourProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <HeadingFour
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
      </HeadingFour>
    </>
  );
};

export default MarkdownH4;
