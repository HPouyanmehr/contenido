import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Custom Components
import MarkdownH1 from 'components/common/Markdown/components/H1';
import MarkdownH2 from 'components/common/Markdown/components/H2';
import MarkdownLink from 'components/common/Markdown/components/Link';

// Custom Types
export interface MarkdownProps {
  children?: string;
}

const Markdown: FC<MarkdownProps> = (props) => {
  // Props
  const { children = '' } = props;

  return (
    <MarkdownRoot
      options={{
        overrides: {
          a: MarkdownLink,
          h1: MarkdownH1,
          h2: MarkdownH2,
        },
      }}
    >
      {children}
    </MarkdownRoot>
  );
};

export default Markdown;
