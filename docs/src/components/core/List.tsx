import { List as MuiList, styled } from '@mui/material';

// Types
import type { ListProps as MuiListProps } from '@mui/material';

// Custom Types
export interface ListProps extends MuiListProps {}

const List = styled(MuiList)<ListProps>();

export default List;
