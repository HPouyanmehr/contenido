import { RichUtils } from 'draft-js';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleSuperscript = (
  state: State,
  stateHandler: StateHandler,
  customSuperscriptkey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customSuperscriptkey || 'SUPERSCRIPT'
  );

  stateHandler(updatedStyle);
};

export default toggleSuperscript;
