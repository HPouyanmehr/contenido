// Types
import type { ContentBlock, ContentState } from 'draft-js';

export type DecoratorStrategy = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) => void;
