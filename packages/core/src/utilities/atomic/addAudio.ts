// Custom Utilities
import addAtomicBlock from './addAtomic';

// Custom Types
import type { AudioAttributes, State, StateHandler } from '../../types';

const addAudio = (
  state: State,
  stateHandler: StateHandler,
  attributes?: AudioAttributes
) => addAtomicBlock(state, stateHandler, 'audio', attributes);

export default addAudio;
