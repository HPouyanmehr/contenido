// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface HeadingThreeProps extends TypographyProps {}

const HeadingThree: FC<HeadingThreeProps> = (props) => {
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
      component='h3'
      fontSize='1.17em'
      fontWeight={700}
      margin='1em 0'
      variant='h3'
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default HeadingThree;
