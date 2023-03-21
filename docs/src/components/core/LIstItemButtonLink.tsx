// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import ListItemButton from 'components/core/ListItemButton';
import Link from 'components/core/Link';

// Custom Types
import type { ListItemButtonProps } from 'components/core/ListItemButton';
import type { LinkProps } from 'components/core/Link';
export interface ListItemButtonLinkProps extends ListItemButtonProps {
  children?: ReactNode;
  href?: string;
  linkProps?: LinkProps;
}

const ListItemButtonLink: FC<ListItemButtonLinkProps> = (props) => {
  // Props
  const { children, href = '/', linkProps, ...otherProps } = props;

  return (
    <Link
      color='inherit'
      sx={{ width: '100%', ...linkProps?.sx }}
      href={href}
      {...linkProps}
    >
      <ListItemButton disableRipple {...otherProps}>
        {children}
      </ListItemButton>
    </Link>
  );
};

export default ListItemButtonLink;
