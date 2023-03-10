// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Common Components
import Header from 'components/common/Header';

// Custom Types
import Head from 'next/head';
export interface PageLayoutProps {
  children?: ReactNode;
  page?: {
    title?: string;
  };
}

const PageLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { children, page } = props;

  return (
    <>
      <Head>
        <title>{page?.title || 'Contenido'}</title>
      </Head>
      <Header />
      <AppBarSpacer />
      {children}
    </>
  );
};

export default PageLayout;
