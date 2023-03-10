// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleH3 = (
  state: State,
  stateHandler: StateHandler,
  customH3Type?: string
) => toggleBlockType(state, stateHandler, customH3Type || 'header-three');

export default toggleH3;
