// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface BodyTwoProps extends TypographyProps {}

const BodyTwo: FC<BodyTwoProps> = (props) => {
  // Props
  const { children, component, variant, ...otherProps } = props;

  return (
    <Typography component='p' variant='body2' {...otherProps}>
      {children}
    </Typography>
  );
};

export default BodyTwo;
