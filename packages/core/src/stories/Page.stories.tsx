import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditorState } from 'draft-js';

import Editor from '../Editor';

const stories = storiesOf('Base', module);

stories.add('Basic Example', () => {
  const [state, setState] = React.useState(EditorState.createEmpty());

  return <Editor editorState={state} onChange={setState} />;
});
