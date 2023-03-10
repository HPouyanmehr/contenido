// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isTextLeftAligned = (state: State, customKey?: string) =>
  hasBlockTypeOf(state, customKey || 'text-align-left');

export default isTextLeftAligned;
