// Custom Types
import type { State } from '../../types';

const getPlainText = (state: State) => state.getCurrentContent().getPlainText();

export default getPlainText;
