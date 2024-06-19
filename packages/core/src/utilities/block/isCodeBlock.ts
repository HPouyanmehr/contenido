// Custom Utilities
import hasBlockTypeOf from '../helper/hasBlockTypeOf';

// Custom Types
import type { State } from '../../types';

const isCodeBlock = (state: State) => hasBlockTypeOf(state, "code-block");

export default isCodeBlock;
