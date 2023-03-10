import { ListItemIcon as MuiListItemIcon, styled } from '@mui/material';

// Types
import type { ListItemIconProps as MuiListItemIconProps } from '@mui/material';

// Custom Types
export interface ListItemIconProps extends MuiListItemIconProps {}

const ListItemIcon = styled(MuiListItemIcon)<ListItemIconProps>();

export default ListItemIcon;
