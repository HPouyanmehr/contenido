// Types
import type { FC } from 'react';

// Custom Components
import SvgIcon from 'components/core/SvgIcon';

// Custom Types
import type { SvgIconProps } from 'components/core/SvgIcon';
export interface ContenidoIconProps extends SvgIconProps {}

const ContenidoIcon: FC<ContenidoIconProps> = (props) => {
  const { color = 'primary', viewBox = '0 0 24 24', ...otherProps } = props;

  return (
    <SvgIcon color={color} viewBox={viewBox} {...otherProps}>
      <path d='M21.71,15.29l-1.71,1.71-1.71-1.71c-.19-.19-.29-.44-.29-.71v-2.33c0-3.41-2.73-6.34-6.15-6.26-3.19,.08-5.78,2.66-5.85,5.85-.08,3.41,2.85,6.15,6.26,6.15h8.74c.55,0,1,.45,1,1v2c0,.55-.45,1-1,1H12.31c-5.3,0-9.92-3.99-10.29-9.28C1.6,6.63,6.63,1.6,12.72,2.03c5.29,.37,9.28,4.99,9.28,10.29v1.95c0,.6-.11,.85-.29,1.04Z' />
    </SvgIcon>
  );
};

export default ContenidoIcon;
