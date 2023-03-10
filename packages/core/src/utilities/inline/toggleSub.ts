import { RichUtils } from 'draft-js';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleSubscript = (
  state: State,
  stateHandler: StateHandler,
  customSubscriptkey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customSubscriptkey || 'SUBSCRIPT'
  );

  stateHandler(updatedStyle);
};

export default toggleSubscript;
