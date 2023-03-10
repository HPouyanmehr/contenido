import { ListItem as MuiListItem, styled } from '@mui/material';

// Types
import type { ListItemProps as MuiListItemProps } from '@mui/material';

// Custom Types
export interface ListItemProps extends MuiListItemProps {}

const ListItem = styled(MuiListItem)<ListItemProps>();

export default ListItem;
