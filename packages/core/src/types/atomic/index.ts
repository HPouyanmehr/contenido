// Types
import type { ContentBlock, ContentState } from 'draft-js';

export type AtomicType = 'audio' | 'file' | 'image' | 'video';

export interface AtomicProps {
  contentState: ContentState;
  block: ContentBlock;
}
