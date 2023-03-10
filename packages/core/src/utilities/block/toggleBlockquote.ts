// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleBlockquote = (
  state: State,
  stateHandler: StateHandler,
  customBlockquoteType?: string
) => toggleBlockType(state, stateHandler, customBlockquoteType || 'blockquote');

export default toggleBlockquote;
