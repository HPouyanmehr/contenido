// Types
import type { FC } from 'react';

// Custom Components
import SvgIcon from 'components/core/SvgIcon';

// Custom Types
import type { SvgIconProps } from 'components/core/SvgIcon';
export interface NPMIconProps extends SvgIconProps {
  variant?: 'one' | 'two';
}

const NPMIcon: FC<NPMIconProps> = (props) => {
  const {
    variant = 'one',
    color = 'inherit',
    viewBox = '0 0 24 24',
    ...otherProps
  } = props;

  return (
    <SvgIcon color={color} viewBox={viewBox} {...otherProps}>
      {variant === 'one' ? (
        <g>
          <path d='M2,7.8h20v7.1H12v1.2H7.4v-1.2H2V7.8z' />
          <path
            style={{ color: 'white' }}
            d='M3.2,13.7h2.1v-3.3h1.2v3.3h0.8V9.1H3.2V13.7z M8.7,9.1v5.8h2.1v-1.2h2.1V9.1H8.7z M12,12.4h-1.2v-2.1H12V12.4
		z M14.1,9.1v4.6h2.1v-3.3h1.2v3.3h1.2v-3.3h1.2v3.3h0.8V9.1H14.1z'
          />
        </g>
      ) : (
        <>
          <rect x='2' y='2' width='20' height='20' />
          <polygon
            style={{ color: 'white' }}
            points='4.73 20 12 20 12 8.36 16.36 8.36 16.36 20 19.27 20 19.27 4 4.73 4 4.73 20'
          />
        </>
      )}
    </SvgIcon>
  );
};

export default NPMIcon;
