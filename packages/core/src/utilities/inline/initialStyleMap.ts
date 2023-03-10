// Types
import type { CSSProperties } from 'react';

export type StyleMapType = { [key: string]: CSSProperties };

const initialStyleMap: StyleMapType = {
  LINE_THROUGH: {
    textDecoration: 'line-through',
  },
  OVERLINE: {
    textDecoration: 'overline',
  },
  SUPERSCRIPT: {
    verticalAlign: 'top',
    fontSize: '0.75em',
  },
  SUBSCRIPT: {
    verticalAlign: 'sub',
    fontSize: '0.75em',
  },
};

export default initialStyleMap;
