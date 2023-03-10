import { Stack as MuiStack, styled } from '@mui/material';

// Types
import type { StackProps as MuiStackProps } from '@mui/material';

// Custom Types
export interface StackProps extends MuiStackProps {}

const Stack = styled(MuiStack)<StackProps>(() => ({}));

Stack.defaultProps = { direction: 'row', spacing: 1, alignItems: 'center' };

export default Stack;
