// Core
import { EditorState, RichUtils } from '../../core';

// Custom Types
import type { LinkAttributes, State, StateHandler } from '../../types';

const addLink = (
  state: State,
  stateHandler: StateHandler,
  attributes?: LinkAttributes
) => {
  const currentContent = state.getCurrentContent();
  const contentStateWithEntity = currentContent.createEntity(
    'link',
    'IMMUTABLE',
    attributes
  );

  const entityKey = currentContent.getLastCreatedEntityKey();

  const newState = EditorState.set(state, {
    currentContent: contentStateWithEntity,
  });
  const selection = newState.getSelection();

  const stateToSet = RichUtils.toggleLink(newState, selection, entityKey);

  stateHandler(stateToSet);
};

export default addLink;
