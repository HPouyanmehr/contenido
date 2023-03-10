// Custom Utilities
import clearBlockTypes from './clearBlockTypes';
import clearEntities from './clearEntities';
import clearInlineStyles from './clearInlineStyles';

// Custom Types
import type { State, StateHandler } from '../../types';

const clear = (state: State, stateHandler: StateHandler): State => {
  const utilities = [clearInlineStyles, clearBlockTypes, clearEntities];

  return utilities.reduce((acc, utility) => {
    return utility(acc, stateHandler);
  }, state);
};

export default clear;
