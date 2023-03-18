// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Common Components
import Header from 'components/common/Header';

// Custom Types
import Head from 'next/head';
import DocSidebar from 'components/common/Sidebar/Doc';
import Box from 'components/core/Box';
import AppBar from 'components/core/AppBar';
import Toolbar from 'components/core/Toolbar';
import MenuToggler from 'components/common/IconButton/MenuToggler';
import Logo from 'components/common/Link/Logo';
import GitHubIconButtonLink from 'components/common/Link/GitHub';
import Divider from 'components/core/Divider';
import DocHeader from 'components/common/Header/Doc';
import BodyOne from 'components/core/BodyOne';
import FooterOne from 'components/section/footer/One';
import OnThisPage from 'components/common/Sidebar/OnThisPage';
import DocsFooter from 'components/section/footer/Doc';
import { DocProps } from 'types/docs';
import HeadingOne from 'components/core/HeadingOne';
import Markdown from 'components/common/Markdown';
export interface PageLayoutProps {
  doc: DocProps;
}

const DocumentLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { doc } = props;

  const drawerWidth = 272;
  return (
    <>
      <Head>
        <title>{doc.title || 'Contenido'}</title>
      </Head>
      <DocHeader />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <DocSidebar />
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
          <Box component='main' sx={{ flexGrow: 1 }}>
            <AppBarSpacer />
            <Markdown>{doc.content}</Markdown>
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
