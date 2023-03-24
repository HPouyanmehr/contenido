// Types
import type { FC } from 'react';

// Custom Core Components
import IconButtonLink from 'components/core/IconButtonLink';

// Custom Icon Components
import GitHubIcon from 'components/icon/GitHub';

// Custom Data
import * as links from 'data/links.json';

// Custom Types
import type { IconButtonProps } from 'components/core/IconButton';
export interface GitHubIconButtonLinkProps extends IconButtonProps {}

const GitHubIconButtonLink: FC<GitHubIconButtonLinkProps> = (props) => {
  return (
    <IconButtonLink
      aria-label='GitHub'
      LinkProps={{ target: '_blank' }}
      href={links.github}
    >
      <GitHubIcon />
    </IconButtonLink>
  );
};

export default GitHubIconButtonLink;
