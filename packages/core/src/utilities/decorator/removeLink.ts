// Core
import { RichUtils } from '../../core';

// Custom Types
import type { State, StateHandler } from '../../types';

const removeLink = (state: State, stateHandler: StateHandler) => {
  const selection = state.getSelection();

  if (!selection.isCollapsed()) {
    const stateToSet = RichUtils.toggleLink(state, selection, null);

    stateHandler(stateToSet);
  }
};

export default removeLink;
