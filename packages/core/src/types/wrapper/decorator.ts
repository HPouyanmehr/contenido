// Types
import type { ReactNode } from 'react';
import type { ContentState } from 'draft-js';

export interface DecoratorWrapperProps {
  contentState: ContentState;
  children: ReactNode;
  blockKey: string;
  decoratedText: string;
  entityKey: string;
  offsetKey: string;
  end: number;
  start: number;
}
