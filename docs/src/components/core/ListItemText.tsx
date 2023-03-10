import { ListItemText as MuiListItemText, styled } from '@mui/material';

// Types
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material';

// Custom Types
export interface ListItemTextProps extends MuiListItemTextProps {}

const ListItemText = styled(MuiListItemText)<ListItemTextProps>();

export default ListItemText;
