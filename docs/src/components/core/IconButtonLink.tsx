// Types
import { FC } from 'react';

// Custom Components
import IconButton from 'components/core/IconButton';
import Link from 'components/core/Link';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
import type { LinkProps } from 'components/core/Link';
export interface IconButtonLinkProps extends IconButtonProps {
  href?: string;
  LinkProps?: Omit<LinkProps, 'href'>;
}

const IconButtonLink: FC<IconButtonLinkProps> = (props) => {
  const { children, href = '/', LinkProps, ...otherProps } = props;

  return (
    <Link href={href} {...LinkProps}>
      <IconButton {...otherProps}>{children}</IconButton>
    </Link>
  );
};

export default IconButtonLink;
