import { IconButton as MuiIconButton, styled } from '@mui/material';

// Types
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';

// Custom Types
export interface IconButtonProps extends MuiIconButtonProps {}

const IconButton = styled(MuiIconButton)<IconButtonProps>(() => ({}));

export default IconButton;
