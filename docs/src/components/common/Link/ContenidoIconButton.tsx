import { useRouter } from 'next/router';

// Types
import type { FC } from 'react';

// Custom Core Components
import IconButtonLink from 'components/core/IconButtonLink';
import IconButton from 'components/core/IconButton';

// Custom Icon Components
import ContenidoIcon from 'components/icon/Contenido';

// Custom Types
import type { IconButtonLinkProps } from 'components/core/IconButtonLink';
export interface ContenidoIconButtonLinkProps extends IconButtonLinkProps {}

const ContenidoIconButtonLink: FC<ContenidoIconButtonLinkProps> = (props) => {
  const { href = '/', size = 'large', ...otherProps } = props;

  const isInHomePage = useRouter().pathname === '/';

  return isInHomePage ? (
    <IconButton aria-label='Contenido' size={size} {...otherProps}>
      <ContenidoIcon fontSize={size} />
    </IconButton>
  ) : (
    <IconButtonLink aria-label='Contenido' href='/' size={size} {...otherProps}>
      <ContenidoIcon fontSize={size} />
    </IconButtonLink>
  );
};

export default ContenidoIconButtonLink;
