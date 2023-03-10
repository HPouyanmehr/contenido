import { Toolbar as MuiToolbar, styled } from '@mui/material';

// Types
import type { ToolbarProps as MuiToolbarProps } from '@mui/material';

// Custom Types
export interface ToolbarProps extends MuiToolbarProps {}

const Toolbar = styled(MuiToolbar)<ToolbarProps>(() => ({}));

export default Toolbar;
