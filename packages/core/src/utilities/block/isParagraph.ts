// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isParagraph = (state: State) =>
  hasBlockTypeOf(state, 'paragraph') || hasBlockTypeOf(state, 'unstyled');

export default isParagraph;
