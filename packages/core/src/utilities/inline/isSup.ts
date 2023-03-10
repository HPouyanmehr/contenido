// Custom Types
import type { State } from '../../types';

const isSuperscript = (state: State, customSuperscriptKey?: string) =>
  state.getCurrentInlineStyle().has(customSuperscriptKey || 'SUPERSCRIPT');

export default isSuperscript;
