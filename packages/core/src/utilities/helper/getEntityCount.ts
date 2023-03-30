import { convertToRaw } from '../../core';

// Custom Types
import type { State } from '../../types';

const getEntityCount = (state: State, type: string) => {
  let count = 0;
  const contentState = state.getCurrentContent();

  const entityValues = Object.values(convertToRaw(contentState).entityMap);

  if (entityValues.length > 0) {
    entityValues.forEach((entity) => {
      if (entity.type === type) count++;
    });
  }

  return count;
};

export default getEntityCount;
