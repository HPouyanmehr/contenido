import { RichUtils } from 'draft-js';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleBlockType = (
  state: State,
  stateHandler: StateHandler,
  blockType: string
) => {
  const updatedState = RichUtils.toggleBlockType(state, blockType);

  stateHandler(updatedState);
};

export default toggleBlockType;
