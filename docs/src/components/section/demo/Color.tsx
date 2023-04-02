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

const PRIMARY = 'PRIMARY';
const SECONDARY = 'SECONDARY';
const BG_LIGHT = 'BG_LIGHT';
const BG_DARK = 'BG_DARK';

const ColorDemo: FC = () => {
  // States
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromText('Colorize the words of this sentence.')
      )
    );
  }, []);

  const styleMap = {
    ...initialStyleMap,
    PRIMARY: {
      color: '#4cb5f5',
    },
    SECONDARY: {
      color: '#b3c100',
    },
    BG_LIGHT: {
      backgroundColor: '#edf7fe',
    },
    BG_DARK: {
      backgroundColor: '#121212',
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
      <Box
        sx={({ breakpoints }) => ({
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          [breakpoints.down('sm')]: { pb: '1rem' },
        })}
      >
        {[PRIMARY, SECONDARY, BG_LIGHT, BG_DARK].map((color, index) => (
          <Button
            key={color + index}
            sx={{
              minWidth: '10rem',
              boxShadow: 'none',
              height: '2.5rem',
              borderRadius: '0.5rem',
              textTransform: 'capitalize',
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              toggleInlineStyle(editorState, setEditorState, color);
            }}
            variant={
              hasInlineStyleOf(editorState, color) ? 'contained' : 'outlined'
            }
          >
            {color.replaceAll('_', ' ').toLocaleLowerCase()}
          </Button>
        ))}
      </Box>
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

export default ColorDemo;
