// Core
import { genKey } from '../../core';

const emptyContentState = {
  entityMap: {},
  blocks: [
    {
      text: '',
      key: genKey(),
      type: 'unstyled',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },
  ],
};

export default emptyContentState;
