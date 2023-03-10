import { useTheme, useMediaQuery } from '@mui/material';

// Types
import type { FC } from 'react';

// Custom Components
import Typography from 'components/core/Typography';

// Custom Types
import type { TypographyProps } from 'components/core/Typography';
export interface HeadingOneProps extends TypographyProps {}

const HeadingOne: FC<HeadingOneProps> = (props) => {
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

  // Hooks
  const theme = useTheme();
  const isDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      component='h1'
      fontSize={isDownSM ? '1.6em' : '2em'}
      fontWeight={700}
      margin='0.67em 0'
      variant={variant}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default HeadingOne;
