import React from 'react';
import { EditorState } from 'draft-js';

// Styles
import 'draft-js/dist/Draft.css';

// Custom Components
import Editor from './components/Editor';

// Custom Styles
import './App.css';

function App() {
  // States
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  // Hooks
  const ref = React.useRef(null);

  return (
    <div>
      <p>Hello Contenido</p>
      <Editor
        editorState={editorState}
        editorRef={ref}
        onChange={setEditorState}
        placeholder='تایپ کنید...'
        rtlPlaceholder
      />
    </div>
  );
}

export default App;
