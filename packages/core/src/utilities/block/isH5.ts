// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isH5 = (state: State) => hasBlockTypeOf(state, 'header-five');

export default isH5;
