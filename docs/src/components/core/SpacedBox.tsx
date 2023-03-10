import { Box as MuiBox, styled } from '@mui/material';

// Types
import type { BoxProps as MuiBoxProps } from '@mui/material';

// Custom Types
export interface SpacedBoxProps extends MuiBoxProps {}

const SpacedBox = styled(MuiBox)<SpacedBoxProps>(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
}));

export default SpacedBox;
