// Types
import type { ThemeOptions } from '@mui/material/styles';

const fontFamily = 'CascadiaCode';

const commonThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        sx: { fontFamily, textTransform: 'initial' },
      },
    },
    MuiTypography: {
      defaultProps: { fontFamily },
    },
  },
};

export default commonThemeOptions;
