import { useState } from 'react';
import { EditorState } from 'draft-js';
import {
  Editor,
  blockStyleFn,
  toggleTextAlign,
  isTextRightAligned,
  isTextCenterAligned,
  isTextLeftAligned,
  isTextJustifyAligned,
} from 'contenido';

// Types
import type { FC } from 'react';

// Custom Types
export interface TextAlignmentEditorProps {}

const buttons = [
  { title: 'left', checker: isTextLeftAligned },
  { title: 'center', checker: isTextCenterAligned },
  { title: 'right', checker: isTextRightAligned },
  { title: 'justify', checker: isTextJustifyAligned },
];

const TextAlignmentEditor: FC<TextAlignmentEditorProps> = (props) => {
  // States
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
              textTransform: 'capitalize',
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              toggleTextAlign(
                editorState,
                setEditorState,
                `text-align-${button.title}`
              );
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
          blockStyleFn={blockStyleFn}
          placeholder='Write here...'
        />
      </div>
    </div>
  );
};

export default TextAlignmentEditor;
