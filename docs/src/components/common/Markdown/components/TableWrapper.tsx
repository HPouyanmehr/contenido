import React from 'react';

// Custom Core Components
import Table from 'components/core/Table';
import Box from 'components/core/Box';

// Custom Utilities
import getScrollbarStyles from 'styles/scrollbar';

// Custom Types
import type { TableProps } from 'components/core/Table';

const TableWrapper = (props: TableProps) => {
  const { children, ...otherProps } = props;

  return (
    <Box
      sx={({ palette }) => ({
        overflow: 'auto',
        ...getScrollbarStyles(palette),
      })}
    >
      <Table {...otherProps}>{children}</Table>
    </Box>
  );
};

export default TableWrapper;
