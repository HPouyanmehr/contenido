// Custom Types
import type { State } from '../../types';

const isOverline = (state: State, customOverlineKey?: string) =>
  state.getCurrentInlineStyle().has(customOverlineKey || 'OVERLINE');

export default isOverline;
