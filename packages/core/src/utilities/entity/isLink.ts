// Custom Types
import { State } from '../../types';

const isLink = (editorState: State, customLinkKey?: string) => {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(selectionState.getStartKey());
  const entityKey = block.getEntityAt(selectionState.getStartOffset());
  if (entityKey) {
    const entity = contentState.getEntity(entityKey);
    const entityType = entity.getType();
    if (entityType === customLinkKey ? customLinkKey : 'LINK') return true;
  }
  return false;
};

export default isLink;
