import Head from 'next/head';

// Types
import type { FC, ReactNode } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Common Components
import Header from 'components/common/Header';

// Custom Data
import common from 'data/common/en.json';

// Custom Types
import type { PageMetaProps } from 'types/common/page';
export interface PageLayoutProps {
  children?: ReactNode;
  meta?: Partial<PageMetaProps>;
}

const PageLayout: FC<PageLayoutProps> = (props) => {
  // Props
  const { children, meta } = props;

  return (
    <>
      <Head>
        <title>{meta?.title || common.title}</title>
        <meta
          name='description'
          content={meta?.description || common.description}
        />
        <meta name='keywords' content={meta?.keywords || common.keywords} />
      </Head>
      <Header />
      <AppBarSpacer />
      {children}
    </>
  );
};

export default PageLayout;
