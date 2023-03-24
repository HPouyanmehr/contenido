// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Common Components
import Header from 'components/common/Header';

// Custom Data
import * as common from 'data/common/en.json';

// Custom Types
import Head from 'next/head';
export interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { children } = props;

  return (
    <>
      <Head>
        <title>{common.title}</title>
        <meta name='description' content={common.description} />
        <meta name='keywords' content={common.keywords} />
      </Head>
      <Header />
      <AppBarSpacer />
      {children}
    </>
  );
};

export default PageLayout;
