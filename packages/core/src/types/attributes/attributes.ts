// Custom Types
import { AudioAttributes } from './audio';
import { FileAttributes } from './file';
import { ImageAttributes } from './image';
import { LinkAttributes } from './link';
import { VideoAttributes } from './video';

export type Attributes =
  | AudioAttributes
  | FileAttributes
  | ImageAttributes
  | VideoAttributes
  | LinkAttributes;

export type DecoratorAttributes = LinkAttributes;
