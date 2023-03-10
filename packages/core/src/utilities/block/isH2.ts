// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isH2 = (state: State) => hasBlockTypeOf(state, 'header-two');

export default isH2;
