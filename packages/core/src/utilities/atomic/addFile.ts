// Custom Utilities
import addAtomicBlock from '../atomic/addAtomic';

// Custom Types
import type { FileAttributes, State, StateHandler } from '../../types';

const addFile = (
  state: State,
  stateHandler: StateHandler,
  attributes?: FileAttributes
) => addAtomicBlock(state, stateHandler, 'file', attributes);

export default addFile;
