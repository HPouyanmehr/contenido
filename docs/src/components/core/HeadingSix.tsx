// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface HeadingSixProps extends TypographyProps {}

const HeadingSix: FC<HeadingSixProps> = (props) => {
  // Props
  const {
    children,
    component,
    variant,
    fontSize,
    fontWeight,
    margin,
    ...otherProps
  } = props;

  return (
    <Typography
      component='h6'
      fontSize='0.67em'
      fontWeight={700}
      margin='1em 0'
      variant='h6'
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default HeadingSix;
