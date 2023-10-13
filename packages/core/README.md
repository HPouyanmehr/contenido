[Support `contenido` for $1 per month.](https://www.paypal.com/donate/?hosted_button_id=SW7L8MAT9BRA6)

# Contenido - Overview

Contenido is a library for building highly customizable rich text editors in React. Check out the documentation and demos [here](https://contenidojs.com).

![Contenido Demo](./.github/assets/contenido-demo-image.jpg 'Contenido')

Using `contenido` you can create rich text editors in MUI(Material-UI), TailwindCSS, Bootstrap, and any other UI library or CSS frameworks.

## Introduction

Contenido is a library with a set of tools to help you create your own editor on top of [draft-js](https://github.com/facebookarchive/draft-js) without thinking about how to handle things.

The main purpose is to give you **the ability of creating your own custom look rich text editor a lot faster and easier**.

## Installation

You can add `contenido` to your project by running the following commands:

React + Typescript:

```shell
npm i draft-js @types/draft-js contenido@latest
```

React + Javascript:

```shell
npm i draft-js contenido@latest
```

## Peer dependencies

`react` >= 18.0.0  
`react-dom` >= 18.0.0  
`draft-js` >= 0.11.0

## Features

Contenido provides a ton of ready to use utilities to boost your development speed. Also there are methods to help you customize things in it. Here are some the library features:

- Inline

  - bold
  - italic
  - undeline
  - line through
  - overline
  - superscript
  - subscript

- Block

  - heading one to six (h1-h6)
  - ordered list
  - unordered list
  - blockquote

- Insertion

  - image
  - video
  - audio
  - file
  - link

- Text alignment
- Inline style clearing
- Block type clearing
- Entities clearing
- Atomic data update
- Built-in shortcuts
- Word array
- Link preview
- Light and dark mode friendly

- Counter
  - word counter
  - character counter
  - image counter
  - video counter
  - file counter
  - audio counter
  - link counter

## No Plugin

Using contenido there is no need to install a lot of plugins, you have all functionalities in one place. The package is tree-shakable,
you can enjoy a no-plugin system and have the proper bundle size in one go.

## Type Safe

Contenido is completely written in typescript, so you are safe to use that in your projects.

## Custom UI

You have the core functionalities of an edior, so can build your custom look RTE a lot faster and easier. Here is an example of using
contenido in MUI(Material-UI), TailwindCSS.

- MUI (Material-UI)

```tsx
import { useState, type FC } from 'react';
import { EditorState } from 'draft-js';
import { Editor, isBold, toggleBold } from 'contenido';

// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Custom Types
export interface MuiExampleEditorProps {}

const MuiExampleEditor: FC<MuiExampleEditorProps> = (props) => {
  // States
  const [state, setState] = useState(EditorState.createEmpty());

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button
        variant={isBold(state) ? 'contained' : 'outlined'}
        color='info'
        onClick={() => {
          toggleBold(state, setState);
        }}
      >
        Bold
      </Button>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder='MUI Rich Text Editor'
      />
    </Box>
  );
};

export default MuiExampleEditor;
```

- Tailwind CSS

```tsx
import { useState, type FC } from 'react';
import { EditorState } from 'draft-js';
import { Editor, isBold, toggleBold } from 'contenido';

// Custom Types
export interface TailwindCSSExampleEditorProps {}

const TailwindCSSExampleEditor: FC<TailwindCSSExampleEditorProps> = (props) => {
  // States
  const [state, setState] = useState(EditorState.createEmpty());

  return (
    <div className='flex flex-col gap-2'>
      <button
        className={`${
          isBold(state) ? 'bg-sky-400' : 'bg-sky-100'
        } py-8 px-16 border border-gray-300`}
        onClick={() => {
          toggleBold(state, setState);
        }}
      >
        Bold
      </button>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder='TailwindCSS Rich Text Editor'
      />
    </div>
  );
};

export default TailwindCSSExampleEditor;
```

Check out the documentation [here](https://www.contenidojs.com/docs/getting-started/overview).
