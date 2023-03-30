import * as React from 'react';
import classNames from 'classnames';

// Types
import type { FC, RefObject } from 'react';
import type {
  EditorProps as DraftEditorProps,
  Editor as DraftEditorType,
} from 'draft-js';

// Core
import { Editor as DraftEditor } from './core';

// Custom Utilities
import isBlockquote from './utilities/block/isBlockquote';
import isOL from './utilities/block/isOL';
import isUL from './utilities/block/isUL';

// Custom Styles
import './styles/main.css';

// Custom Types
export interface EditorProps extends DraftEditorProps {
  rtlPlaceholder?: boolean;
  editorRef?: RefObject<DraftEditorType> | undefined;
}

const Editor: FC<EditorProps> = (props) => {
  // Props
  const {
    editorRef,
    placeholder,
    rtlPlaceholder,
    textDirectionality,
    ...otherProps
  } = props;

  // States
  const [showPlaceholder, setShowPlaceholder] = React.useState<boolean>(false);

  // Hooks
  const setShowPlaceholderValue = React.useCallback(() => {
    if (
      isBlockquote(props.editorState) ||
      isOL(props.editorState) ||
      isUL(props.editorState)
    )
      return false;
    return true;
  }, [props.editorState]);

  React.useEffect(() => {
    setShowPlaceholder(setShowPlaceholderValue());
  }, [setShowPlaceholderValue]);

  // Utilities
  const hasText = () => props.editorState.getCurrentContent().hasText();

  return (
    <div
      className={
        classNames({
          'rtl-placeholder': rtlPlaceholder && !hasText(),
        }) || undefined
      }
    >
      <DraftEditor
        ref={editorRef}
        placeholder={showPlaceholder && placeholder ? placeholder : undefined}
        textDirectionality={
          textDirectionality
            ? textDirectionality
            : rtlPlaceholder && !hasText()
            ? 'RTL'
            : undefined
        }
        {...otherProps}
      />
    </div>
  );
};

export default Editor;
