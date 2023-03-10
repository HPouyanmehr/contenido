// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isUL = (state: State) => hasBlockTypeOf(state, 'unordered-list-item');

export default isUL;
