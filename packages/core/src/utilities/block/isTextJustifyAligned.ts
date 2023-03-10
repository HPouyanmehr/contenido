// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isTextJustifyAligned = (state: State, customKey?: string) =>
  hasBlockTypeOf(state, customKey || 'text-align-justify');

export default isTextJustifyAligned;
