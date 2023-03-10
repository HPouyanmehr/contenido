// Custom Types
import type { State } from '../../types';

const getWordArray = (state: State) => {
  const plainText = state.getCurrentContent().getPlainText();
  const wordArray = plainText.match(/\S+/g); // Matches words according to the whitespace.

  return wordArray ? wordArray : [];
};

export default getWordArray;
