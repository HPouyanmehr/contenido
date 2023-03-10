// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleOL = (
  state: State,
  stateHandler: StateHandler,
  customOLType?: string
) => toggleBlockType(state, stateHandler, customOLType || 'ordered-list-item');

export default toggleOL;
