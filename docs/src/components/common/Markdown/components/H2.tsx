// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingTwo from 'components/core/HeadingTwo';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingTwoProps } from 'components/core/HeadingTwo';

const MarkdownH2: FC<HeadingTwoProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <HeadingTwo
        sx={{
          margin: '1.75em 0 0.83em',
          borderBottom: '1px solid',
          borderColor: 'divider',
          ':hover': {
            '.hash': {
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
            className='hash'
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

export default MarkdownH2;
