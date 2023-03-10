// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleH5 = (
  state: State,
  stateHandler: StateHandler,
  customH5Type?: string
) => toggleBlockType(state, stateHandler, customH5Type || 'header-five');

export default toggleH5;
