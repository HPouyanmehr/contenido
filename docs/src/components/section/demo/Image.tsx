import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { EditorState } from 'draft-js';
import {
  Editor,
  addImage,
  createDecorator,
  findEntitiesOf,
  getImageCount,
} from 'contenido';

// Types
import type { FC } from 'react';
import type { DecoratorComponentProps, ImageAttributes } from 'contenido';

// Custom Core Components
import Box from 'components/core/Box';
import Button from 'components/core/Button';

// Custom Types
import { CustomTypeBackground } from 'types/common/theme';

const Image: FC<DecoratorComponentProps> = (props) => {
  if (props.blockType === 'image') {
    const { src, alt } = props as ImageAttributes;
    if (src && alt) {
      return (
        <>
          <NextImage alt={alt || ''} src={src} width={200} height={200} />
          <p>use ctrl + a (cmd + a) + del to remove image</p>
        </>
      );
    }
  }
  return <p>The atomic type is not supported in this demo!</p>;
};

const ImageEditor: FC = () => {
  // Decorator
  const decorator = createDecorator([
    {
      component: Image,
      strategy: findEntitiesOf('image'),
    },
  ]);

  // States
  const [isLimit, setIsLimit] = useState(false);
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(decorator)
  );

  useEffect(() => {
    if (getImageCount(editorState) >= 1) {
      setIsLimit(true);
    } else {
      setIsLimit(false);
    }
  }, [editorState]);

  // Utilities
  const handleAddImage = () => {
    addImage(editorState, setEditorState, {
      src: 'https://picsum.photos/200/200',
      alt: 'a random image from https://picsum.photos',
      style: { width: 200, height: 200 },
    });
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
        <Button
          disabled={isLimit}
          sx={{
            minWidth: '10rem',
            boxShadow: 'none',
            height: '2.5rem',
            borderRadius: '0.5rem',
            textTransform: 'capitalize',
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            handleAddImage();
          }}
        >
          Add Image
        </Button>
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
          placeholder='Add an image...'
        />
      </Box>
    </Box>
  );
};

export default ImageEditor;
