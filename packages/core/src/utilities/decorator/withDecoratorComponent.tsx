// Types
import type { ComponentType } from 'react';

// Custom Types
import type {
  DecoratorComponentProps,
  DecoratorWrapperProps,
} from '../../types';

const withDecoratorComponent =
  <T extends DecoratorComponentProps>(Wrapped: ComponentType<T>) =>
  (props: DecoratorWrapperProps) => {
    const {
      contentState,
      blockKey,
      decoratedText,
      entityKey,
      offsetKey,
      end,
      start,
      ...otherProps
    } = props;

    const entity = contentState.getEntity(entityKey);

    const blockType = entity.getType();
    const mutability = entity.getMutability;
    const attributes = entity.getData();

    return (
      <Wrapped
        blockType={blockType}
        mutability={mutability}
        entityKey={entityKey}
        {...otherProps}
        {...attributes}
      />
    );
  };

export default withDecoratorComponent;
