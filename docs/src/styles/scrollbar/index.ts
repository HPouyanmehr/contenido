// Types
import type { Palette } from '@mui/material';

const getScrollbarStyles = (palette: Palette) => ({
  '::-webkit-scrollbar': {
    width: '8px',
    height: '6px',
  },
  '::-webkit-scrollbar-track': {
    background: palette.background.paper,
    borderRadius: '8px',
    overflow: 'hidden',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#e6e6e6',
    borderRadius: '8px',
  },
});

export default getScrollbarStyles;
