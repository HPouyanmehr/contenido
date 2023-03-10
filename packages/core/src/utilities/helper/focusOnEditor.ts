// Custom Types
import type { EditorRef } from '../../types';

const focusOnEditor = (ref: EditorRef) => {
  if (ref) ref.current?.focus();
};

export default focusOnEditor;
