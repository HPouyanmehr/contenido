// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface HeadingFourProps extends TypographyProps {}

const HeadingFour: FC<HeadingFourProps> = (props) => {
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
      component='h4'
      fontSize='1em'
      fontWeight={700}
      margin='1em 0'
      variant='h4'
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default HeadingFour;
