import MarkdownRoot from 'markdown-to-jsx';

// Types
import type { FC } from 'react';

// Custom Core Components
import Divider from 'components/core/Divider';

// Custom Common Components
import InlineCode from 'components/common/Markdown/components/InlineCode';
import MarkdownH1 from 'components/common/Markdown/components/H1';
import MarkdownH2 from 'components/common/Markdown/components/H2';
import MarkdownH3 from 'components/common/Markdown/components/H3';
import MarkdownH4 from 'components/common/Markdown/components/H4';
import MarkdownH5 from 'components/common/Markdown/components/H5';
import MarkdownH6 from 'components/common/Markdown/components/H6';
import MarkdownLink from 'components/common/Markdown/components/Link';
import Blockquote from './components/Blockquote';
import MarkdownCode from './components/Code';

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
          blockquote: Blockquote,
          code: InlineCode,
          hr: Divider,
          h1: MarkdownH1,
          h2: MarkdownH2,
          h3: MarkdownH3,
          h4: MarkdownH4,
          h5: MarkdownH5,
          h6: MarkdownH6,
          pre: MarkdownCode,
        },
      }}
    >
      {children}
    </MarkdownRoot>
  );
};

export default Markdown;
