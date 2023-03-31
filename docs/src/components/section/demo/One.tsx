import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { EditorState } from 'draft-js';
import {
  Editor,
  blockStyleFn,
  focusOnEditor,
  initialStyleMap,
  isH2,
  isH3,
  isH4,
  isBold,
  isItalic,
  isLineThrough,
  isUnderline,
  toggleH2,
  toggleH3,
  toggleH4,
  toggleParagraph,
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleLineThrough,
  toggleTextAlign,
  isTextCenterAligned,
  isTextLeftAligned,
  isTextRightAligned,
  isTextJustifyAligned,
  toggleUL,
  isUL,
  isOL,
  toggleOL,
  isBlockquote,
  toggleBlockquote,
  addLink,
  createDecorator,
  DecoratorComponentProps,
  findEntitiesOfLink,
  addImage,
  findEntitiesOf,
  ImageAttributes,
} from 'contenido';

// Types
import type { FC } from 'react';

// Custom Core Components
import Box from 'components/core/Box';
import Container from 'components/core/Container';
import MenuItem from 'components/core/MenuItem';
import Paper from 'components/core/Paper';
import Select from 'components/core/Select';
import Stack from 'components/core/Stack';
import StackDivider from 'components/core/StackDivider';

// Custom Common Components
import AlignCenterIconButton from 'components/common/IconButton/AlignCenter';
import AlignJustifyIconButton from 'components/common/IconButton/AlignJustify';
import AlignLeftIconButton from 'components/common/IconButton/AlignLeft';
import AlignRightIconButton from 'components/common/IconButton/AlignRight';
import BoldIconButton from 'components/common/IconButton/Bold';
import IndentDecreaseIconButton from 'components/common/IconButton/IndentDecrease';
import IndentIncreaseIconButton from 'components/common/IconButton/IndentIncrease';
import ItalicIconButton from 'components/common/IconButton/Italic';
import LinkIconButton from 'components/common/IconButton/Link';
import ListBulletedIconButton from 'components/common/IconButton/ListBulleted';
import ListNumberedIconButton from 'components/common/IconButton/ListNumbered';
import MoreIconButton from 'components/common/IconButton/More';
import PhotoIconButton from 'components/common/IconButton/Photo';
import QuoteIconButton from 'components/common/IconButton/Quote';
import StrikethroughIconButton from 'components/common/IconButton/Strikethrough';
import UnderlinedIconButton from 'components/common/IconButton/Underline';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
import type { PaperProps } from 'components/core/Paper';
import Link from 'components/core/Link';
import Image from 'next/image';

const EditorImage: FC<DecoratorComponentProps> = (props) => {
  if (props.blockType === 'image') {
    const { src, alt } = props as ImageAttributes;
    if (src && alt)
      return <Image alt={alt} src={src} width={250} height={200} />;
  }
  return <p>No supported in this demo!</p>;
};

const EditorLink: FC<DecoratorComponentProps> = (props) => {
  return (
    <Link display='inline-block' underline='hover' href={props.href || '/'}>
      {props.children}
    </Link>
  );
};

const DemoOne: FC<PaperProps> = (props) => {
  // Props
  const { sx, ...otherProps } = props;

  const findEntitiesOfImage = findEntitiesOf('image');

  const decorators = createDecorator([
    {
      component: EditorLink,
      strategy: findEntitiesOfLink,
    },
    {
      component: EditorImage,
      strategy: findEntitiesOfImage,
    },
  ]);

  // States
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(decorators)
  );
  const [blockType, setBlockType] = useState<'p' | 'h2' | 'h3' | 'h4'>('p');

  // Hooks
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isUpXl = useMediaQuery(theme.breakpoints.up('xl'));

  const editorRef = useRef(null);

  const handleBlockTypeChange = useCallback(() => {
    if (isH2(editorState)) {
      setBlockType('h2');
      return;
    }
    if (isH3(editorState)) {
      setBlockType('h3');
      return;
    }
    if (isH4(editorState)) {
      setBlockType('h4');
      return;
    }
    setBlockType('p');
  }, [editorState]);

  useEffect(() => {
    handleBlockTypeChange();
  }, [editorState, handleBlockTypeChange]);

  return (
    <Box
      sx={({ breakpoints, palette }) => ({
        backgroundColor: (palette.background as CustomTypeBackground).card,
        [breakpoints.down('md')]: { pb: '2rem' },
      })}
    >
      <Container>
        <Paper
          sx={({ shadows, breakpoints }) => ({
            boxShadow: shadows[6],
            position: 'relative',
            py: 1,
            [breakpoints.up('md')]: {
              top: '-5rem',
              p: 1,
            },
          })}
          {...otherProps}
        >
          <Stack
            direction='column'
            alignItems='flex-start'
            spacing={2}
            sx={{ padding: '1rem 1.5rem' }}
          >
            <Stack>
              <Stack divider={<StackDivider />}>
                <Stack>
                  <Select
                    sx={{ width: '10rem', height: '2.5rem' }}
                    value={blockType}
                  >
                    <MenuItem
                      value='p'
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleParagraph(editorState, setEditorState);
                      }}
                    >
                      Paragraph
                    </MenuItem>
                    <MenuItem
                      value='h2'
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleH2(editorState, setEditorState);
                      }}
                    >
                      Heading Two
                    </MenuItem>
                    <MenuItem
                      value='h3'
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleH3(editorState, setEditorState);
                      }}
                    >
                      Heading Three
                    </MenuItem>
                    <MenuItem
                      value='h4'
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleH4(editorState, setEditorState);
                      }}
                    >
                      Heading Four
                    </MenuItem>
                  </Select>
                </Stack>
                {isUpSm && (
                  <Stack>
                    <BoldIconButton
                      color={isBold(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBold(editorState, setEditorState);
                      }}
                    />
                    <ItalicIconButton
                      color={isItalic(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleItalic(editorState, setEditorState);
                      }}
                    />
                    <UnderlinedIconButton
                      color={isUnderline(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleUnderline(editorState, setEditorState);
                      }}
                    />
                    <StrikethroughIconButton
                      color={isLineThrough(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        toggleLineThrough(editorState, setEditorState);
                      }}
                    />
                  </Stack>
                )}
                {isUpSm && (
                  <Stack>
                    <AlignLeftIconButton
                      color={
                        isTextLeftAligned(editorState) ? 'primary' : 'default'
                      }
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleTextAlign(
                          editorState,
                          setEditorState,
                          'text-align-left'
                        );
                      }}
                    />
                    <AlignCenterIconButton
                      color={
                        isTextCenterAligned(editorState) ? 'primary' : 'default'
                      }
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleTextAlign(
                          editorState,
                          setEditorState,
                          'text-align-center'
                        );
                      }}
                    />
                    <AlignRightIconButton
                      color={
                        isTextRightAligned(editorState) ? 'primary' : 'default'
                      }
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleTextAlign(
                          editorState,
                          setEditorState,
                          'text-align-right'
                        );
                      }}
                    />
                    <AlignJustifyIconButton
                      color={
                        isTextJustifyAligned(editorState)
                          ? 'primary'
                          : 'default'
                      }
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleTextAlign(
                          editorState,
                          setEditorState,
                          'text-align-justify'
                        );
                      }}
                    />
                  </Stack>
                )}
                {isUpLg && (
                  <Stack>
                    <ListBulletedIconButton
                      color={isUL(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleUL(editorState, setEditorState);
                      }}
                    />
                    <ListNumberedIconButton
                      color={isOL(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleOL(editorState, setEditorState);
                      }}
                    />
                    <IndentIncreaseIconButton disabled />
                    <IndentDecreaseIconButton disabled />
                    <QuoteIconButton
                      color={isBlockquote(editorState) ? 'primary' : 'default'}
                      onMouseDown={(e) => {
                        e.preventDefault();

                        toggleBlockquote(editorState, setEditorState);
                      }}
                    />
                  </Stack>
                )}
                {isUpXl && (
                  <Stack>
                    <LinkIconButton
                      onMouseDown={(e) => {
                        e.preventDefault();

                        addLink(editorState, setEditorState, {
                          href: 'https://github.com/HPouyanmehr/contenido',
                        });
                      }}
                    />
                    <PhotoIconButton
                      onMouseDown={(e) => {
                        e.preventDefault();

                        addImage(editorState, setEditorState, {
                          alt: 'An example of images in contenido',
                          src: '/example-image.jpg',
                        });
                      }}
                    />
                  </Stack>
                )}
              </Stack>
              {!isUpXl && <MoreIconButton />}
            </Stack>
            <Box
              dir='auto'
              sx={{
                borderRadius: '1rem',
                border: '1px solid',
                borderColor: 'divider',
                width: '100%',
                p: '0.75rem',
                height: '28.75rem',
                overflow: 'auto',
                cursor: 'text',
              }}
              onClick={() => focusOnEditor(editorRef)}
            >
              <Editor
                editorState={editorState}
                editorRef={editorRef}
                onChange={setEditorState}
                customStyleMap={initialStyleMap}
                blockStyleFn={blockStyleFn}
              />
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default DemoOne;
