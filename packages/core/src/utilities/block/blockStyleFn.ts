// Types
import type { ContentBlock } from 'draft-js';

// Custom Utilities
import initialBlockStyles from './initialBlockStyle';

const blockStyleFn = (
  block: ContentBlock,
  customBlockStyles?: { [key: string]: string }[]
) => {
  const blockType = block.getType();
  let blockStyles = initialBlockStyles;

  if (customBlockStyles && customBlockStyles?.length > 0) {
    customBlockStyles.forEach(
      (blockStyle) => (blockStyles = { ...blockStyles, ...blockStyle })
    );
  }

  return blockStyles[blockType || 'unstyled'];
};

export default blockStyleFn;
