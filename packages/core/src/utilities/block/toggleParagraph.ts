// Custom Utilities
import toggleBlockType from './toggleBlockType';

// Custom Types
import type { State, StateHandler } from '../../types';

const toggleParagraph = (
  state: State,
  stateHandler: StateHandler,
  customParagraphType?: string
) => toggleBlockType(state, stateHandler, customParagraphType || 'paragraph');

export default toggleParagraph;
