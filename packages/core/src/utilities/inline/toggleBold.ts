import { RichUtils } from 'draft-js';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleBold = (
  state: State,
  stateHandler: StateHandler,
  customBoldkey?: string
) => {
  const updatedStyle = RichUtils.toggleInlineStyle(
    state,
    customBoldkey || 'BOLD'
  );

  stateHandler(updatedStyle);
};

export default toggleBold;
