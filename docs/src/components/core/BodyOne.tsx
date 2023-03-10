// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface BodyOneProps extends TypographyProps {}

const BodyOne: FC<BodyOneProps> = (props) => {
  // Props
  const { children, component, variant, ...otherProps } = props;

  return (
    <Typography component='p' variant='body1' {...otherProps}>
      {children}
    </Typography>
  );
};

export default BodyOne;
