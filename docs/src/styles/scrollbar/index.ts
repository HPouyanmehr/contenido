import { darken } from '@mui/material';

// Types
import type { Palette } from '@mui/material';

// Custom Types
import { CustomTypeBackground } from 'types/common/theme';

const getScrollbarStyles = (palette: Palette) => ({
  '::-webkit-scrollbar': {
    width: '8px',
    height: '6px',
  },
  '::-webkit-scrollbar-track': {
    background:
      palette.mode === 'dark'
        ? palette.background.default
        : palette.background.paper,
    borderRadius: '8px',
    overflow: 'hidden',
  },
  '::-webkit-scrollbar-thumb': {
    background: darken((palette.background as CustomTypeBackground).card, 0.05),
    borderRadius: '8px',
  },
});

export default getScrollbarStyles;
