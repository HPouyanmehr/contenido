// Core
import { RichUtils } from '../../core';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleLineThrough = (
  state: State,
  stateHandler: StateHandler,
  customLineThroughkey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customLineThroughkey || 'LINE_THROUGH'
  );

  stateHandler(updatedStyle);
};

export default toggleLineThrough;
