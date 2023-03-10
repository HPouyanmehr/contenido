import { Button as MuiButton, styled } from '@mui/material';

// Types
import type { ButtonProps as MuiButtonProps } from '@mui/material';

// Custom Types
export interface ButtonProps extends MuiButtonProps {}

const Button = styled(MuiButton)<ButtonProps>(() => ({}));

export default Button;
