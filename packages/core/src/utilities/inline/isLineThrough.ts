// Custom Types
import type { State } from '../../types';

const isLineThrough = (state: State, customLineThroughKey?: string) =>
  state.getCurrentInlineStyle().has(customLineThroughKey || 'LINE_THROUGH');

export default isLineThrough;
