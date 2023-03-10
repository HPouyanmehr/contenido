// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleH1 = (
  state: State,
  stateHandler: StateHandler,
  customH1Type?: string
) => toggleBlockType(state, stateHandler, customH1Type || 'header-one');

export default toggleH1;
