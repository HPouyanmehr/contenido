// Custom Types
import type { State } from '../../types';

const getPlainText = (state: State | string): string => {
  if (typeof state === 'string') {
    const extractedText: string[] = [];

    try {
      const parsedState = JSON.parse(state);

      if (parsedState && parsedState.blocks) {
        for (let block of parsedState.blocks) {
          if (block && block.text) extractedText.push(block.text);
        }
      }
    } catch {
      console.error(
        'The provided value to get the plain text is neither a valid JSON nor a draft-js state.'
      );
    }

    return extractedText.join(' ');
  } else {
    return state.getCurrentContent().getPlainText();
  }
};

export default getPlainText;
