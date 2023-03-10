import { Drawer as MuiDrawer, styled } from '@mui/material';

// Types
import type { DrawerProps as MuiDrawerProps } from '@mui/material';

// Custom Types
export interface DrawerProps extends MuiDrawerProps {}

const Drawer = styled(MuiDrawer)<DrawerProps>();

export default Drawer;
