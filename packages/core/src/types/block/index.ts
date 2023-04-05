// Custom Utilities
import initialBlockTypes from '../../utilities/block/initialBlockTypes';

export type BlockStyleType =
  | 'text-align-left'
  | 'text-align-center'
  | 'text-align-right'
  | 'text-align-justify'
  | 'blockquote'
  | 'unstyled';

export type InitialBlockType = keyof typeof initialBlockTypes;
