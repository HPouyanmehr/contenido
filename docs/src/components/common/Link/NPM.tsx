// Types
import type { FC } from 'react';

// Custom Core Components
import IconButtonLink from 'components/core/IconButtonLink';

// Custom Icon Components
import NPMIcon from 'components/icon/NPM';

// Custom Data
import links from 'data/links.json';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface NPMIconButtonLinkProps extends IconButtonProps {}

const NPMIconButtonLink: FC<NPMIconButtonLinkProps> = (props) => {
  return (
    <IconButtonLink
      aria-label='NPM'
      LinkProps={{ target: '_blank' }}
      href={links.npm}
    >
      <NPMIcon />
    </IconButtonLink>
  );
};

export default NPMIconButtonLink;
