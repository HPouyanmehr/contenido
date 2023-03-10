// Custom Types
import type { State } from '../../types';

const isSubcript = (state: State, customSubcriptKey?: string) =>
  state.getCurrentInlineStyle().has(customSubcriptKey || 'SUBSCRIPT');

export default isSubcript;
