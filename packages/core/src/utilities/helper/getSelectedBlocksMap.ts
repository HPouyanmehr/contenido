// Custom Types
import type { State } from '../../types';

const getSelectedBlocksMap = (state: State) => {
  const contentState = state.getCurrentContent();
  const blockMap = contentState.getBlockMap();
  const selection = state.getSelection();

  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();

  if (startKey === endKey) {
    return [blockMap.get(startKey)];
  } else {
    return blockMap
      .toSeq()
      .skipUntil((_, k) => k === startKey)
      .takeUntil((_, k) => k === endKey)
      .toArray();
  }
};

export default getSelectedBlocksMap;
