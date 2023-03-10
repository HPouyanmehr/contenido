import { styled } from '@mui/material';

const AppBarSpacer = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export default AppBarSpacer;
