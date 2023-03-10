import { Container as MuiContainer, styled } from '@mui/material';

// Types
import type { ContainerProps as MuiContainerProps } from '@mui/material';

// Custom Types
export interface ContainerProps extends MuiContainerProps {}

const Container = styled(MuiContainer)<ContainerProps>(() => ({}));

Container.defaultProps = { maxWidth: 'lg' };

export default Container;
