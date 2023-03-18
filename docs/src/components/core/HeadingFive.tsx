// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface HeadingFiveProps extends TypographyProps {}

const HeadingFive: FC<HeadingFiveProps> = (props) => {
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
      component='h5'
      fontSize='0.83em'
      fontWeight={700}
      margin='1em 0'
      variant='h5'
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default HeadingFive;
