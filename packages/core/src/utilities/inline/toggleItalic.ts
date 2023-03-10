import { RichUtils } from 'draft-js';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleItalic = (
  state: State,
  stateHandler: StateHandler,
  customItalickey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customItalickey || 'ITALIC'
  );

  stateHandler(updatedStyle);
};

export default toggleItalic;
