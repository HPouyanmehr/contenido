// Core
import { EditorState, Modifier, SelectionState } from '../../core';

// Custom Utilities
import getSelectedBlocksMap from './getSelectedBlocksMap';

// Custom Types
import type { State, StateHandler } from '../../types';

const clearBlockTypes = (state: State, stateHandler: StateHandler) => {
  const contentState = state.getCurrentContent();

  const blocksMap = getSelectedBlocksMap(state);

  const contentWithoutBlocks = blocksMap.reduce((newContentState, block) => {
    const blockType = block.getType();
    if (blockType !== 'unstyled') {
      const selectionState = SelectionState.createEmpty(block.getKey());
      const updatedSelection = selectionState.merge({
        focusOffset: 0,
        anchorOffset: block.getText().length,
      });

      return Modifier.setBlockType(
        newContentState,
        updatedSelection,
        'unstyled'
      );
    }

    return newContentState;
  }, contentState);

  const newState = EditorState.push(
    state,
    contentWithoutBlocks,
    'change-block-type'
  );

  stateHandler(newState);
  return newState;
};

export default clearBlockTypes;
