// Types
import type { DraftEntityMutability } from 'draft-js';

// Custom Types
import type {
  AudioAttributes,
  FileAttributes,
  ImageAttributes,
  VideoAttributes,
} from '../attributes';

export type AtomicWrapperProps = {
  mutability: DraftEntityMutability;
  entityKey: string;
  [key: string]: any;
} & (
  | ({ blockType: 'audio' } & AudioAttributes)
  | ({ blockType: 'file' } & FileAttributes)
  | ({ blockType: 'image' } & ImageAttributes)
  | ({ blockType: 'video' } & VideoAttributes)
);
