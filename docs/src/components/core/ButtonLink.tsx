// Types
import type { FC } from 'react';

// Custom Core Components
import Button from 'components/core/Button';
import Link from 'components/core/Link';

// Custom Types
import type { ButtonProps } from 'components/core/Button';
import type { LinkProps } from 'components/core/Link';
export interface ButtonLinkProps extends ButtonProps {
  href?: string;
  linkProps?: Omit<LinkProps, 'href'>;
}

export const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { children, href = '/', disabled, linkProps, ...otherProps } = props;

  const Root = () => (
    <Button disabled={disabled} {...otherProps}>
      {children}
    </Button>
  );

  return disabled ? (
    <Root />
  ) : (
    <Link href={href} {...linkProps}>
      <Root />
    </Link>
  );
};

export default ButtonLink;
