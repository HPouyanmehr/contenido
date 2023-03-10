// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isH4 = (state: State) => hasBlockTypeOf(state, 'header-four');

export default isH4;
