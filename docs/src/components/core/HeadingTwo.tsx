// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface HeadingTwoProps extends TypographyProps {}

const HeadingTwo: FC<HeadingTwoProps> = (props) => {
  // Props
  const {
    children,
    component,
    variant = 'h2',
    fontSize,
    fontWeight = 700,
    margin,
    ...otherProps
  } = props;

  return (
    <Typography
      component='h2'
      fontSize='1.5em'
      fontWeight={fontWeight}
      margin='0.83em 0'
      variant={variant}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default HeadingTwo;
