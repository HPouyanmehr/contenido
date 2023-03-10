// Custom Types
import type { State } from '../../types';

const isBold = (state: State, customBoldKey?: string) =>
  state.getCurrentInlineStyle().has(customBoldKey || 'BOLD');

export default isBold;
