import { useState } from 'react';
import { EditorState } from 'draft-js';
import {
  Editor,
  hasInlineStyleOf,
  initialStyleMap,
  isBold,
  isItalic,
  isLineThrough,
  isOverline,
  isSub,
  isSup,
  isUnderline,
  toggleBold,
  toggleInlineStyle,
  toggleItalic,
  toggleLineThrough,
  toggleOverline,
  toggleSub,
  toggleSup,
  toggleUnderline,
} from 'contenido';

// Types
import type { FC } from 'react';
import type { State, StateHandler } from 'contenido';

// Custom Types
export interface InlineStylesEditorProps {}

const HIGHLIGHT = 'HIGHLIGHT';

const buttons = [
  { title: 'Bold', handler: toggleBold, checker: isBold },
  { title: 'Italic', handler: toggleItalic, checker: isItalic },
  { title: 'Underline', handler: toggleUnderline, checker: isUnderline },
  { title: 'Line Through', handler: toggleLineThrough, checker: isLineThrough },
  { title: 'Overline', handler: toggleOverline, checker: isOverline },
  { title: 'Sup', handler: toggleSup, checker: isSup },
  { title: 'Sub', handler: toggleSub, checker: isSub },
  {
    title: 'Highlight',
    handler: (editorState: State, stateHandler: StateHandler) =>
      toggleInlineStyle(editorState, stateHandler, HIGHLIGHT),
    checker: (editorState: State) => hasInlineStyleOf(editorState, HIGHLIGHT),
  },
];

const InlineStylesEditor: FC<InlineStylesEditorProps> = (props) => {
  // States
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const styleMap = {
    ...initialStyleMap,
    HIGHLIGHT: { backgroundColor: '#fdffb4' },
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        overflow: 'auto',
      }}
    >
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {buttons.map((button) => (
          <button
            key={button.title}
            style={{
              minWidth: '2rem',
              padding: '0.5rem',
              backgroundColor: button.checker(editorState)
                ? '#4cb5f5'
                : 'rgba(125, 125, 125, 0.25)',
              color: button.checker(editorState) ? '#fff' : 'inherit',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              button.handler(editorState, setEditorState);
            }}
          >
            {button.title}
          </button>
        ))}
      </div>
      <div
        dir='auto'
        style={{
          border: '1px solid #252525',
          borderRadius: '0.5rem',
          padding: '0.5rem 1rem',
        }}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={styleMap}
          placeholder='Write here...'
        />
      </div>
    </div>
  );
};

export default InlineStylesEditor;
