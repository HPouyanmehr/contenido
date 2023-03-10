// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isH6 = (state: State) => hasBlockTypeOf(state, 'header-six');

export default isH6;
