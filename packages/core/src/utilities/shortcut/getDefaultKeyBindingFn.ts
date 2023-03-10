import { getDefaultKeyBinding, KeyBindingUtil, RichUtils } from 'draft-js';

// Custom Utilities
import initialShortcuts from './initial';

// Custom Types
import type { ShortcutMap, SyntheticKeyboardEvent } from '../../types';

const getDefaultKeyBindingFn = (
  event: SyntheticKeyboardEvent,
  customShortcuts?: ShortcutMap[]
): string | null => {
  if (event.key === 'Alt') event.preventDefault();

  let shortcuts = customShortcuts || initialShortcuts;
  for (let shortcutMap of shortcuts) {
    if (Array.isArray(shortcutMap.shortcut)) {
      let matches = shortcutMap.shortcut.every((key, index) => {
        if (
          ['ctrl', 'control', 'cmd', 'command'].includes(
            key.toLocaleLowerCase()
          ) &&
          KeyBindingUtil.hasCommandModifier(event)
        )
          return true;
        if (
          (key.toLocaleLowerCase() === 'alt' ||
            key.toLocaleLowerCase() === 'option') &&
          KeyBindingUtil.isOptionKeyCommand(event)
        )
          return true;
        if (key.toLocaleLowerCase() === 'shift') return event.shiftKey;
        return key === event.key;
      });

      if (matches) return shortcutMap.style;
    } else if (shortcutMap.shortcut(event)) {
      return shortcutMap.shortcut(event);
    }
  }

  return getDefaultKeyBinding(event);
};

export default getDefaultKeyBindingFn;
