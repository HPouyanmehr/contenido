import { TextField as MuiTextField, styled } from '@mui/material';

// Types
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';

// Custom Types
export type TextFieldProps = MuiTextFieldProps;

const TextField = styled(MuiTextField)<TextFieldProps>(() => ({}));

export default TextField;
