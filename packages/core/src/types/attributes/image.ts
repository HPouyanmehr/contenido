// Types
import type { ClassAttributes, ImgHTMLAttributes } from 'react';

export type ImageAttributes =
  | (ImgHTMLAttributes<HTMLImageElement> & ClassAttributes<HTMLImageElement>)
  | (ImgHTMLAttributes<HTMLPictureElement> &
      ClassAttributes<HTMLPictureElement>);
