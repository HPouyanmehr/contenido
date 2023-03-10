// Types
import type { AnchorHTMLAttributes, ClassAttributes } from 'react';

export type LinkAttributes =
  | AnchorHTMLAttributes<HTMLAnchorElement> &
      ClassAttributes<HTMLAnchorElement>;
