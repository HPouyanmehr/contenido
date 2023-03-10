// Custom Utilities
import initialShortcuts from './initial';

// Custom Types
import type { DraftHandleValue } from 'draft-js';
import type { ShortcutMap, State, StateHandler } from '../../types';

const shortcutHandler =
  (stateHandler: StateHandler, customShortcutsMap?: ShortcutMap[]) =>
  (command: string, state: State): DraftHandleValue => {
    let shortcuts = customShortcutsMap || initialShortcuts;

    const shortcutIndex = shortcuts.findIndex(
      (shortcut) => shortcut.style === command
    );

    if (shortcutIndex > -1) {
      shortcuts[shortcutIndex].handler(state, stateHandler);

      return 'handled';
    }

    return 'not-handled';
  };

export default shortcutHandler;
