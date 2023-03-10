import { SvgIcon as MuiSvgIcon, styled } from '@mui/material';

// Types
import type { SvgIconProps as MuiSvgIconProps } from '@mui/material';

// Custom Types
export interface SvgIconProps extends MuiSvgIconProps {}

const SvgIcon = styled(MuiSvgIcon)<SvgIconProps>(() => ({}));

SvgIcon.defaultProps = { fontSize: 'inherit' };

export default SvgIcon;
