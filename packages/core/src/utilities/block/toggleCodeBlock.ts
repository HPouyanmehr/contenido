// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleCodeBlock = (
  state: State,
  stateHandler: StateHandler,
  customBlockquoteType?: string
) => toggleBlockType(state, stateHandler, customBlockquoteType || "code-block");

export default toggleCodeBlock;
