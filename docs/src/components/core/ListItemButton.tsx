import { ListItemButton as MuiListItemButton, styled } from '@mui/material';

// Types
import type { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';

// Custom Types
export interface ListItemButtonProps extends MuiListItemButtonProps {}

const ListItemButton = styled(MuiListItemButton)<ListItemButtonProps>();

export default ListItemButton;
