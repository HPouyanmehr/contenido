// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleUL = (
  state: State,
  stateHandler: StateHandler,
  customOLType?: string
) =>
  toggleBlockType(state, stateHandler, customOLType || 'unordered-list-item');

export default toggleUL;
