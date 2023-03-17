import MuiLink from '@mui/material/Link';

// Types
import type { FC } from 'react';

// Custom Core Components
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref, isExternal } from 'utilities/helper/link';

// Custom Types
import { LinkProps } from 'components/core/Link';

const MarkdownLink: FC<LinkProps> = (props) => {
  // Props
  const { children, href, underline = 'hover', sx, ...otherProps } = props;

  return isExternal(href) ? (
    <MuiLink href={fixHref(href)} target='_blank' underline={underline}>
      {children}
    </MuiLink>
  ) : (
    <Link
      href={fixHref(href)}
      underline={underline}
      sx={{ textTransform: 'initial', ...sx }}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default MarkdownLink;
