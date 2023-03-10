// Types
import type { ContentBlock, ContentState } from 'draft-js';

const findEntitiesOf =
  (entityType: string) =>
  (
    contentBlock: ContentBlock,
    callback: (start: number, end: number) => void,
    contentState: ContentState
  ) => {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();

      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === entityType
      );
    }, callback);
  };

export default findEntitiesOf;
