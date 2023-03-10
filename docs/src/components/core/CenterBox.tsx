import { Box as MuiBox, styled } from '@mui/material';

// Types
import type { BoxProps as MuiBoxProps } from '@mui/material';

// Custom Types
export interface CenterBoxProps extends MuiBoxProps {}

const CenterBox = styled(MuiBox)<CenterBoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default CenterBox;
