import { EditorState, Modifier } from 'draft-js';

// Custom Utilities
import initialInlineStyles from '../inline/inlineStyles';

// Custom Types
import type { State, StateHandler } from '../../types';

const clearInlineStyles = (
  state: State,
  stateHandler: StateHandler,
  customInlineStyles?: string[]
) => {
  const contentState = state.getCurrentContent();
  const selection = state.getSelection();
  const stylesToRemove = Object.keys(initialInlineStyles);

  if (customInlineStyles) {
    customInlineStyles.forEach((style) => {
      if (!stylesToRemove.includes(style)) stylesToRemove.push(style);
    });
  }

  const contentWithoutStyles = stylesToRemove.reduce(
    (updatedContentState, styleKey) =>
      Modifier.removeInlineStyle(updatedContentState, selection, styleKey),
    contentState
  );

  const newState = EditorState.push(
    state,
    contentWithoutStyles,
    'change-inline-style'
  );

  stateHandler(newState);
  return newState;
};

export default clearInlineStyles;
