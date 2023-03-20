import { useCallback, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atelier-lakeside-dark';

// Types
import type { FC, ReactElement } from 'react';

// Custom Types
export interface MarkdownCodeProps {
  children?: ReactElement;
}

const MarkdownCode: FC<MarkdownCodeProps> = (props) => {
  // Props
  const { children } = props;

  // States
  const [code, setCode] = useState<string>('');
  const [lang, setLang] = useState<string>('');

  // Utilities
  const initializeCode = useCallback(() => {
    if (children && children.props) {
      const { className, children: codeToSet } = children.props;

      if (
        typeof className === 'string' &&
        typeof codeToSet === 'string' &&
        className.startsWith('lang-')
      ) {
        setLang(className.slice(5));
        setCode(codeToSet);
      }
    }
  }, [children]);

  // Hooks
  useEffect(() => {
    initializeCode();
  }, [children, initializeCode]);

  return (
    <SyntaxHighlighter
      language={lang}
      style={dark}
      customStyle={{
        color: '#d4d4d4',
        padding: '1rem',
        borderRadius: '0.5rem',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default MarkdownCode;
