// Core
import { AtomicBlockUtils, EditorState } from '../../core';

// Core Types
import type { DraftEntityMutability } from '../../core';

// Custom Types
import type { Attributes, State, StateHandler } from '../../types';

const addAtomicBlock = (
  state: State,
  stateHandler: StateHandler,
  fileType: string,
  attributes?: Attributes,
  mutibility?: DraftEntityMutability
) => {
  const contentState = state.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    fileType,
    mutibility || 'IMMUTABLE',
    { ...attributes }
  );

  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  const newEditorState = EditorState.set(state, {
    currentContent: contentStateWithEntity,
  });

  const stateToSet = AtomicBlockUtils.insertAtomicBlock(
    newEditorState,
    entityKey,
    ' '
  );

  stateHandler(stateToSet);
};

export default addAtomicBlock;
