import { ButtonGroup as MuiButtonGroup, styled } from '@mui/material';

// Types
import type { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material';

// Custom Types
export interface ButtonGroupProps extends MuiButtonGroupProps {}

const ButtonGroup = styled(MuiButtonGroup)<ButtonGroupProps>(() => ({}));

export default ButtonGroup;
