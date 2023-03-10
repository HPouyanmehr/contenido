// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isH1 = (state: State) => hasBlockTypeOf(state, 'header-one');

export default isH1;
