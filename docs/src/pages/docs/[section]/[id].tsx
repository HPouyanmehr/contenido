import DocumentLayout from 'components/layout/Doc';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { FC, ReactNode } from 'react';
import { DocProps } from 'types/docs';
import { getAllDocsPaths, getDocData } from 'utilities/docs';

// Custom Types
export interface DocumentPageProps {
  children: ReactNode;
  doc: DocProps;
}

const DocumentPage: FC<DocumentPageProps> = (props) => {
  // Props
  const { children, doc } = props;

  return (
    <DocumentLayout page={{ title: doc.title }}>{children}</DocumentLayout>
  );
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

  return {
    props: { doc },
  };
};
