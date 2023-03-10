// Custom Utilities
import addAtomicBlock from '../atomic/addAtomic';

// Custom Types
import type { ImageAttributes, State, StateHandler } from '../../types';

// Custom Types

const addImage = (
  state: State,
  stateHandler: StateHandler,
  attributes?: ImageAttributes
) => addAtomicBlock(state, stateHandler, 'image', attributes);

export default addImage;
