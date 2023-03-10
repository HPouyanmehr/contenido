// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isOL = (state: State) => hasBlockTypeOf(state, 'ordered-list-item');

export default isOL;
