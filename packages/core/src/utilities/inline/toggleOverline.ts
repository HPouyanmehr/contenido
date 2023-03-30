// Core
import { RichUtils } from '../../core';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleOverline = (
  state: State,
  stateHandler: StateHandler,
  customOverlinekey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customOverlinekey || 'OVERLINE'
  );

  stateHandler(updatedStyle);
};

export default toggleOverline;
