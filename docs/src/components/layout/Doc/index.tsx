import Head from 'next/head';

// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';
import Box from 'components/core/Box';

// Custom Common Components
import DocHeader from 'components/common/Header/Doc';
import DocSidebar from 'components/common/Sidebar/Doc';
import Markdown from 'components/common/Markdown';
import OnThisPage from 'components/common/Sidebar/OnThisPage';

// Custom Types
import DocsFooter from 'components/section/footer/Doc';

import type { DocProps, DocSidebarProps } from 'types/docs';
export interface PageLayoutProps {
  doc?: DocProps;
  sidebar?: DocSidebarProps[];
}

const DocumentLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { doc, sidebar = [] } = props;

  return (
    <>
      <Head>
        <title>{doc?.title || 'Contenido'}</title>
      </Head>
      <DocHeader />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <DocSidebar sidebar={sidebar} />
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
          <Box component='main' sx={{ flexGrow: 1 }}>
            <AppBarSpacer />
            <Markdown>{doc?.content}</Markdown>
          </Box>
          <Box
            sx={({ breakpoints }) => ({
              minWidth: '17rem',
              [breakpoints.down('xl')]: { display: 'none' },
            })}
          >
            <OnThisPage />
          </Box>
        </Box>
      </Box>
      <DocsFooter />
    </>
  );
};

export default DocumentLayout;
