import { Paper as MuiPaper, styled } from '@mui/material';

// Types
import type { PaperProps as MuiPaperProps } from '@mui/material';

// Custom Types
export interface PaperProps extends MuiPaperProps {}

const Paper = styled(MuiPaper)<PaperProps>(() => ({
  borderRadius: '1rem',
}));

export default Paper;
