// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleH2 = (
  state: State,
  stateHandler: StateHandler,
  customH2Type?: string
) => toggleBlockType(state, stateHandler, customH2Type || 'header-two');

export default toggleH2;
