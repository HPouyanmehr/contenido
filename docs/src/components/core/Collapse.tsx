import { Collapse as MuiCollapse, styled } from '@mui/material';

// Types
import type { CollapseProps as MuiCollapseProps } from '@mui/material';

// Custom Types
export interface CollapseProps extends MuiCollapseProps {}

const Collapse = styled(MuiCollapse)<CollapseProps>();

export default Collapse;
