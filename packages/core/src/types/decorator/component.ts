// Types
import type { DraftEntityMutability } from 'draft-js';
import type { ReactNode } from 'react';

// Custom Types
import type { LinkAttributes } from '../attributes';

export interface DecoratorComponentProps extends LinkAttributes {
  children?: ReactNode;
  blockType: string;
  decoratedText: string;
  mutability: DraftEntityMutability;
}
