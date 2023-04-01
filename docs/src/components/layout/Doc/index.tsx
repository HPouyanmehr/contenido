import Head from 'next/head';

// Types
import type { FC } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';
import Box from 'components/core/Box';
import ButtonLink from 'components/core/ButtonLink';
import Divider from 'components/core/Divider';

// Custom Common Components
import DocHeader from 'components/common/Header/Doc';
import DocSidebar from 'components/common/Sidebar/Doc';
import Markdown from 'components/common/Markdown';
import OnThisPage from 'components/common/Sidebar/OnThisPage';

// Custom Section Components
import DocsFooter from 'components/section/footer/Doc';

// Custom Icon Components
import ChevronRightIcon from 'components/icon/ChevronRight';

// Custom Utilities
import { getNextSidebarLink, getPrevSidebarLink } from 'utilities/helper/link';

// Custom Types
import type { DocProps, DocSidebarProps } from 'types/docs';

export interface PageLayoutProps {
  doc?: DocProps;
  sidebar?: DocSidebarProps[];
}

const DocumentLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { doc, sidebar = [] } = props;

  const nextDoc = getNextSidebarLink(sidebar, doc);
  const prevDoc = getPrevSidebarLink(sidebar, doc);

  return (
    <>
      <Head>
        <title>{doc?.title || 'Contenido'}</title>
      </Head>
      <DocHeader />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box
          sx={({ breakpoints }) => ({
            [breakpoints.down('md')]: { display: 'none' },
          })}
        >
          <DocSidebar sidebar={sidebar} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
          <Box
            component='main'
            sx={({ breakpoints }) => ({
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              [breakpoints.down('md')]: { mx: 2 },
            })}
          >
            <Box>
              <AppBarSpacer />
              <Markdown>{doc?.content}</Markdown>
            </Box>
            {(nextDoc.link || prevDoc.link) && (
              <>
                <Divider sx={{ mt: '3rem' }} />
                <Box
                  sx={({}) => ({
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    my: '2rem',
                  })}
                >
                  {prevDoc.link ? (
                    <ButtonLink
                      href={`/docs${prevDoc.link}`}
                      sx={{
                        textTransform: 'capitalize',
                        color: 'text.primary',
                      }}
                      startIcon={
                        <ChevronRightIcon
                          sx={{ transform: 'rotate(-180deg)' }}
                        />
                      }
                    >
                      {prevDoc.title.replaceAll('-', ' ')}
                    </ButtonLink>
                  ) : (
                    <Box />
                  )}
                  {nextDoc.link && (
                    <ButtonLink
                      href={`/docs${nextDoc.link}`}
                      sx={{
                        textTransform: 'capitalize',
                        color: 'text.primary',
                      }}
                      endIcon={<ChevronRightIcon />}
                    >
                      {nextDoc.title.replaceAll('-', ' ')}
                    </ButtonLink>
                  )}
                </Box>
              </>
            )}
          </Box>
          <Box
            sx={({ breakpoints }) => ({
              minWidth: '17rem',
              [breakpoints.down('xl')]: { display: 'none' },
            })}
          >
            <OnThisPage headings={doc?.headings} />
          </Box>
        </Box>
      </Box>
      <DocsFooter />
    </>
  );
};

export default DocumentLayout;
