import { Grid as MuiGrid, styled } from '@mui/material';

// Types
import type { GridProps as MuiGridProps } from '@mui/material';

// Custom Types
export interface GridProps extends MuiGridProps {}

const Grid = styled(MuiGrid)<GridProps>(() => ({}));

export default Grid;
