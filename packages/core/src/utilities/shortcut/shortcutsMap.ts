// Custom Utilities
import initialShortcuts from './initial';
import toggleLineThrough from '../inline/toggleLineThrough';
import toggleSuperscript from '../inline/toggleSup';
import toggleSubscript from '../inline/toggleSub';
import toggleTextAlign from '../block/toggleTextAlign';
import toggleOL from '../block/toggleOL';
import toggleUL from '../block/toggleUL';
import toggleBlockquote from '../block/toggleBlockquote';
import clear from '../helper/clear';

// Custom types
import type { ShortcutMap } from '../../types';

const shortcutsMap: ShortcutMap[] = [
  ...initialShortcuts,
  {
    style: 'LINE_THROUGH',
    shortcut: ['ctrl', 'shift', 'X'],
    handler: toggleLineThrough,
  },
  {
    style: 'SUPERSCRIPT',
    shortcut: ['ctrl', 'shift', '+'],
    handler: toggleSuperscript,
  },
  {
    style: 'SUBSCRIPT',
    shortcut: ['ctrl', '='],
    handler: toggleSubscript,
  },
  {
    style: 'text-align-right',
    shortcut: ['ctrl', 'shift', 'R'],
    handler: (state, stateHandler) =>
      toggleTextAlign(state, stateHandler, 'text-align-right'),
  },
  {
    style: 'text-align-center',
    shortcut: ['ctrl', 'shift', 'E'],
    handler: (state, stateHandler) =>
      toggleTextAlign(state, stateHandler, 'text-align-center'),
  },
  {
    style: 'text-align-left',
    shortcut: ['ctrl', 'shift', 'L'],
    handler: (state, stateHandler) =>
      toggleTextAlign(state, stateHandler, 'text-align-left'),
  },
  {
    style: 'text-align-justify',
    shortcut: ['ctrl', 'shift', 'J'],
    handler: (state, stateHandler) =>
      toggleTextAlign(state, stateHandler, 'text-align-justify'),
  },
  {
    style: 'OL',
    shortcut: ['ctrl', 'shift', '&'],
    handler: toggleOL,
  },
  {
    style: 'UL',
    shortcut: ['ctrl', 'shift', '*'],
    handler: toggleUL,
  },
  {
    style: 'blockquote',
    shortcut: ['ctrl', 'shift', '('],
    handler: toggleBlockquote,
  },
  {
    style: 'unstyled',
    shortcut: ['ctrl', '\\'],
    handler: clear,
  },
];

export default shortcutsMap;
