import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Types
import type { ImageProps } from 'next/image';
import type { FC } from 'react';

// Custom Types
export interface LogoProps extends Partial<ImageProps> {}

const Logo: FC<LogoProps> = (props) => {
  // Props
  const {
    alt = 'A typographical logo of Contenido.',
    src = '/contenido.svg',
    width = 150,
    height = 24,
    ...otherProps
  } = props;

  // Hooks
  const isInHome = useRouter().pathname === '/';

  const Root = () => (
    <Image
      priority
      alt={alt}
      src={src}
      width={width}
      height={height}
      {...otherProps}
    />
  );

  return isInHome ? (
    <Root />
  ) : (
    <Link href='/'>
      <Root />
    </Link>
  );
};

export default Logo;
