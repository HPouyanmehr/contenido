// Custom Types
import type { State } from '../../types';

const isItalic = (state: State, customItalicKey?: string) =>
  state.getCurrentInlineStyle().has(customItalicKey || 'ITALIC');

export default isItalic;
