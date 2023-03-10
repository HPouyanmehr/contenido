// Custom Types
import type { State } from '../../types';

const hasInlineStyle = (state: State) =>
  !state.getCurrentInlineStyle().isEmpty();

export default hasInlineStyle;
