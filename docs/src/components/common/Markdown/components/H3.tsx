// Types
import type { FC } from 'react';

// Custom Core Components
import HeadingThree from 'components/core/HeadingThree';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref } from 'utilities/helper/link';

// Custom Types
import { HeadingThreeProps } from 'components/core/HeadingThree';

const MarkdownH3: FC<HeadingThreeProps> = (props) => {
  // Props
  const { children, sx, ...otherProps } = props;

  return (
    <>
      <HeadingThree
        sx={{
          margin: '1.75em 0 0.83em',
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
      </HeadingThree>
    </>
  );
};

export default MarkdownH3;
