// Types
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next/types';

// Custom Layouts
import DocumentLayout from 'components/layout/Doc';

// Custom Utilities
import { getAllDocsPaths, getDocData, getDocsSidebar } from 'utilities/docs';

// Custom Types
import type { DocProps, DocSidebarProps } from 'types/docs';
export interface DocumentPageProps {
  doc: DocProps;
  sidebar: DocSidebarProps[];
}

const DocumentPage: FC<DocumentPageProps> = (props) => {
  return <DocumentLayout {...props} />;
};

export default DocumentPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDocsPaths();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { section, id } = params as { section: string; id: string };

  const doc = getDocData(section, id);
  const sidebar = getDocsSidebar();

  return {
    props: { doc, sidebar },
  };
};
