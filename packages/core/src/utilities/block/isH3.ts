// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isH3 = (state: State) => hasBlockTypeOf(state, 'header-three');

export default isH3;
