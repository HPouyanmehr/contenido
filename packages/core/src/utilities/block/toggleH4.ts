// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleH4 = (
  state: State,
  stateHandler: StateHandler,
  customH4Type?: string
) => toggleBlockType(state, stateHandler, customH4Type || 'header-four');

export default toggleH4;
