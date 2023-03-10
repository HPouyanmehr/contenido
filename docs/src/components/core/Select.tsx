import { Select as MuiSelect, styled } from '@mui/material';

// Types
import type { SelectProps as MuiSelectProps } from '@mui/material';

// Custom Types
export interface SelectProps extends MuiSelectProps {}

const Select = styled(MuiSelect)<SelectProps>(() => ({}));

export default Select;
