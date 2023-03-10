import DocumentLayout from 'components/layout/Doc';
import { FC, ReactNode } from 'react';

// Custom Types
export interface DocumentPageProps {
  children: ReactNode;
}

const DocumentPage: FC<DocumentPageProps> = (props) => {
  // Props
  const { children } = props;

  return <DocumentLayout>{children}</DocumentLayout>;
};

export default DocumentPage;
