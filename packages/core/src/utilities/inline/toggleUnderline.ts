// Core
import { RichUtils } from '../../core';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleUnderline = (
  state: State,
  stateHandler: StateHandler,
  customUnderlinekey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customUnderlinekey || 'UNDERLINE'
  );

  stateHandler(updatedStyle);
};

export default toggleUnderline;
