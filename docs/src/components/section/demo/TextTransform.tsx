import { useState, useEffect } from 'react';
import { ContentState, EditorState } from 'draft-js';
import {
  Editor,
  hasInlineStyleOf,
  initialStyleMap,
  toggleInlineStyle,
} from 'contenido';

// Types
import type { CSSProperties, FC } from 'react';

// Custom Core Components
import Box from 'components/core/Box';
import Button from 'components/core/Button';

// Custom Types
import { CustomTypeBackground } from 'types/common/theme';

const CAPITALIZE = 'CAPITALIZE';
const LOWERCASE = 'LOWERCASE';
const UPPERCASE = 'UPPERCASE';
const INITIAL = 'INITIAL';

type TransformType = 'CAPITALIZE' | 'LOWERCASE' | 'UPPERCASE' | 'INITIAL';

const TextTransformDemo: FC = () => {
  // States
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        ContentState.createFromText('Modify this tExT to See DIFFERENCES.')
      )
    );
  }, []);

  const styleMap: { [key: string]: CSSProperties } = {
    ...initialStyleMap,
    CAPITALIZE: {
      textTransform: 'capitalize',
    },
    LOWERCASE: {
      textTransform: 'lowercase',
    },
    UPPERCASE: {
      textTransform: 'uppercase',
    },
    INITIAL: {
      textTransform: 'initial',
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
        {([CAPITALIZE, LOWERCASE, UPPERCASE, INITIAL] as TransformType[]).map(
          (textTransform, index) => (
            <Button
              key={textTransform + index}
              sx={{
                minWidth: '10rem',
                boxShadow: 'none',
                height: '2.5rem',
                borderRadius: '0.5rem',
                textTransform: 'capitalize',
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleInlineStyle(editorState, setEditorState, textTransform);
              }}
              variant={
                hasInlineStyleOf(editorState, textTransform)
                  ? 'contained'
                  : 'outlined'
              }
            >
              {textTransform.replaceAll('_', ' ').toLocaleLowerCase()}
            </Button>
          )
        )}
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

export default TextTransformDemo;
