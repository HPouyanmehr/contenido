// Custom Types
import type { State } from '../../types';

const hasBlockTypeOf = (state: State, blockType: string) => {
  const selection = state.getSelection();
  const currentContent = state.getCurrentContent();

  const currentBlockType = currentContent
    .getBlockForKey(selection.getStartKey())
    .getType();

  return currentBlockType === blockType ? true : false;
};

export default hasBlockTypeOf;
