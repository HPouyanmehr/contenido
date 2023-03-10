// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface CaptionProps extends TypographyProps {}

const Caption: FC<CaptionProps> = (props) => {
  // Props
  const { children, component, variant, ...otherProps } = props;

  return (
    <Typography component='caption' variant='caption' {...otherProps}>
      {children}
    </Typography>
  );
};

export default Caption;
