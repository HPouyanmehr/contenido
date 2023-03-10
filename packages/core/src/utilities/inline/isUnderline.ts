// Custom Types
import type { State } from '../../types';

const isUnderline = (state: State, customUnderlineKey?: string) =>
  state.getCurrentInlineStyle().has(customUnderlineKey || 'UNDERLINE');

export default isUnderline;
