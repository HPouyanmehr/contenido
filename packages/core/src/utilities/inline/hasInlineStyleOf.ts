// Custom Types
import type { State } from '../../types';

const hasInlineStyleOf = (state: State, key: string) =>
  state.getCurrentInlineStyle().has(key);

export default hasInlineStyleOf;
