import { EditorState } from 'draft-js';

// Types
import type { Attributes, State, StateHandler } from '../../types';

type NewEntityData = Attributes | { [key: string]: any };

const updateAtomicData = (
  state: State,
  stateHandler: StateHandler,
  entityKey: string,
  newData: NewEntityData
) => {
  const contentState = state.getCurrentContent();
  const entity = contentState.getEntity(entityKey);
  const newEntityData = { ...entity.getData(), ...newData };
  const newContentState = contentState.mergeEntityData(
    entityKey,
    newEntityData
  );

  const updatedState = EditorState.push(state, newContentState, 'apply-entity');
  stateHandler(updatedState);
};

export default updateAtomicData;
