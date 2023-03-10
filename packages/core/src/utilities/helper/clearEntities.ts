import { EditorState, Modifier } from 'draft-js';

// Custom Types
import type { State, StateHandler } from '../../types';

const clearEntities = (state: State, stateHandler: StateHandler) => {
  const contentState = state.getCurrentContent();
  const selection = state.getSelection();
  const contentWithoutEntities = Modifier.applyEntity(
    contentState,
    selection,
    null
  );

  const newState = EditorState.push(
    state,
    contentWithoutEntities,
    'apply-entity'
  );

  stateHandler(newState);
  return newState;
};

export default clearEntities;
