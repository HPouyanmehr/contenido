// Custom Types
import type { State } from '../../types';

const getAtomicCount = (state: State, blockType: string) => {
  let count = 0;

  const contentState = state.getCurrentContent();
  contentState.getBlockMap().forEach((block) => {
    if (block && block.getType() === 'atomic') {
      const entity = contentState.getEntity(block.getEntityAt(0));

      if (entity.getType() === blockType) count++;
    }
  });

  return count;
};

export default getAtomicCount;
