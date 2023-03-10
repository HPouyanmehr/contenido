// Types
import type { FC } from 'react';
import type { ContentBlock } from 'draft-js';

// Custom Types
import type { AtomicProps, AtomicWrapperProps } from '../../types';

const blockRendererFn =
  (
    AtomicWrapper: FC<AtomicWrapperProps>,
    callback?: (content: ContentBlock) => void
  ) =>
  (content: ContentBlock) => {
    const blockType = content.getType();

    if (blockType === 'atomic')
      return {
        component: (atomicProps: AtomicProps) => {
          const entity = atomicProps.contentState.getEntity(
            atomicProps.block.getEntityAt(0)
          );
          const entityKey = atomicProps.block.getEntityAt(0);

          const props = entity.getData();
          const mutability = entity.getMutability();
          const type = entity.getType();

          return (
            <AtomicWrapper
              {...props}
              blockType={type}
              mutability={mutability}
              entityKey={entityKey}
            />
          );
        },
        editable: false,
      };

    if (callback) callback(content);
  };

export default blockRendererFn;
