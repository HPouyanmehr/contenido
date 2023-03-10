// Types
import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { Editor as DraftEditor, EditorState } from 'draft-js';

export type State = EditorState;
export type StateHandler =
  | Dispatch<SetStateAction<State>>
  | ((state: State) => void);

export type EditorRef = RefObject<DraftEditor> | null;

export type SyntheticClipboardEvent = React.ClipboardEvent<{}>;
export type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
export type SyntheticEvent = React.SyntheticEvent<{}>;
