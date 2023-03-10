// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isTextCenterAligned = (state: State, customKey?: string) =>
  hasBlockTypeOf(state, customKey || 'text-align-center');

export default isTextCenterAligned;
