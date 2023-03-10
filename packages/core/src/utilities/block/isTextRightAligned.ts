// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isTextRightAligned = (state: State, customKey?: string) =>
  hasBlockTypeOf(state, customKey || 'text-align-right');

export default isTextRightAligned;
