// Core
import { RichUtils } from '../../core';

// Custom types
import type { State, StateHandler } from '../../types';

const insertSoftNewline = (state: State, stateHanlder: StateHandler): State => {
  const newState = RichUtils.insertSoftNewline(state);

  stateHanlder(newState);
  return newState;
};

export default insertSoftNewline;
