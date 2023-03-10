// Custom Utilities
import addAtomicBlock from './addAtomic';

// Custom Types
import type { State, StateHandler, VideoAttributes } from '../../types';

const addVideo = (
  state: State,
  stateHandler: StateHandler,
  attributes?: VideoAttributes
) => addAtomicBlock(state, stateHandler, 'video', attributes);

export default addVideo;
