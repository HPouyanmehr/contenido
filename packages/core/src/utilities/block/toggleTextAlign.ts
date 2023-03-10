// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleTextAlign = (
  state: State,
  stateHandler: StateHandler,
  key?: string
) => toggleBlockType(state, stateHandler, key || 'text-align-right');

export default toggleTextAlign;
