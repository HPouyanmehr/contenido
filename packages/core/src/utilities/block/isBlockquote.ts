// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isBlockquote = (state: State) => hasBlockTypeOf(state, 'blockquote');

export default isBlockquote;
