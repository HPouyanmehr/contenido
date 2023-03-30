// Core
import { KeyBindingUtil } from '../../core';

// Custom Utilities
import toggleBold from '../inline/toggleBold';
import toggleItalic from '../inline/toggleItalic';
import toggleUnderline from '../inline/toggleUnderline';

// Custom types
import type { ShortcutMap } from '../../types';
import insertSoftNewline from '../helper/insertSoftNewline';

const initialShortcuts: ShortcutMap[] = [
  { style: 'BOLD', shortcut: ['ctrl', 'b'], handler: toggleBold },
  { style: 'ITALIC', shortcut: ['ctrl', 'i'], handler: toggleItalic },
  { style: 'UNDERLINE', shortcut: ['ctrl', 'u'], handler: toggleUnderline },
  {
    style: 'SOFT_NEW_LINE',
    shortcut: (event) =>
      KeyBindingUtil.isSoftNewlineEvent(event) ? 'SOFT_NEW_LINE' : '',
    handler: insertSoftNewline,
  },
];

export default initialShortcuts;
