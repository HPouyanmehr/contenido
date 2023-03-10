// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleH6 = (
  state: State,
  stateHandler: StateHandler,
  customH6Type?: string
) => toggleBlockType(state, stateHandler, customH6Type || 'header-six');

export default toggleH6;
