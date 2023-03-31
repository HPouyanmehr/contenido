import { useTheme } from '@mui/material';

// Types
import type { FC, ReactNode } from 'react';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode: FC<InlineCodeProps> = (props) => {
  // Props
  const { children } = props;

  // Hooks
  const { palette } = useTheme();

  return (
    <code
      style={{
        backgroundColor: (palette.background as CustomTypeBackground).card,
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
      }}
    >
      {children}
    </code>
  );
};

export default InlineCode;
