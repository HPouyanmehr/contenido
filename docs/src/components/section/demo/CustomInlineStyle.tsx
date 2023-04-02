import { useState, useEffect } from 'react';
import { ContentState, EditorState } from 'draft-js';
import {
  Editor,
  hasInlineStyleOf,
  initialStyleMap,
  toggleInlineStyle,
} from 'contenido';

// Types
import type { FC } from 'react';

// Custom Core Components
import Box from 'components/core/Box';
import Button from 'components/core/Button';

// Custom Types
import { CustomTypeBackground } from 'types/common/theme';

const COLORIZE = 'COLORIZE';

const CustomInlineStyleDemo: FC = () => {
  // States
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromText('Colorize the words of this sentence.')
      )
    );
  }, []);

  // Custom Utilities
  const toggleColorize = () =>
    toggleInlineStyle(editorState, setEditorState, COLORIZE);

  const isColorize = () => hasInlineStyleOf(editorState, COLORIZE);

  const styleMap = {
    ...initialStyleMap,
    COLORIZE: {
      fontWeight: 'bold',
      color: '#4cb5f5',
    },
  };

  return (
    <Box
      dir='auto'
      sx={({ palette }) => ({
        backgroundColor: (palette.background as CustomTypeBackground).card,
        borderRadius: '0.5rem',
        p: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      })}
    >
      <Button
        sx={{
          width: '10rem',
          boxShadow: 'none',
          height: '2.5rem',
          borderRadius: '0.5rem',
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleColorize();
        }}
        variant={isColorize() ? 'contained' : 'outlined'}
      >
        Colorize
      </Button>
      <Box
        sx={({ palette }) => ({
          backgroundColor: palette.background.paper,
          borderRadius: '0.5rem',
          border: '1px solid',
          borderColor: 'divider',
          padding: '0.5rem',
        })}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={styleMap}
        />
      </Box>
    </Box>
  );
};

export default CustomInlineStyleDemo;
