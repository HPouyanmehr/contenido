// Types
import type { RawDraftContentState } from 'draft-js';

// Core
import { genKey } from '../../core';

const emptyRawContentState: RawDraftContentState = {
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

export default emptyRawContentState;
