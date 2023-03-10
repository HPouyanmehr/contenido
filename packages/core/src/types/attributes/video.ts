// Types
import type { ClassAttributes, VideoHTMLAttributes } from 'react';

export type VideoAttributes =
  | VideoHTMLAttributes<HTMLVideoElement> & ClassAttributes<HTMLVideoElement>;
