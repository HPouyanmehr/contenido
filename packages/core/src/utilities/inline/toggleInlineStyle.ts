// Core
import { RichUtils } from '../../core';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleInlineStyle = (
  state: State,
  stateHandler: StateHandler,
  key: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(state, key);

  stateHandler(updatedStyle);
};

export default toggleInlineStyle;
