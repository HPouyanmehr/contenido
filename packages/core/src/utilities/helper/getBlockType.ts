// Custom Types
import type { State } from '../../types';

const getBlockType = (state: State) => {
  const selection = state.getSelection();
  const currentContent = state.getCurrentContent();

  return currentContent.getBlockForKey(selection.getStartKey()).getType();
};

export default getBlockType;
