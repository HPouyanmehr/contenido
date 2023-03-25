import React from 'react';
import { EditorState } from 'draft-js';

// Styles
import 'draft-js/dist/Draft.css';

// Custom Components
import Editor from './components/Editor';

function App() {
  // States
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  // Hooks
  const ref = React.useRef(null);

  return (
    <Editor
      editorState={editorState}
      editorRef={ref}
      onChange={setEditorState}
    />
  );
}

export default App;
