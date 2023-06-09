import * as React from 'react';
import { useTheme } from '@mui/material';

// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import Stack from 'components/core/Stack';

// Custom Icon COmponents
import ContentCopyIcon from 'components/icon/ContentCopy';
import KeyboardArrowUpIcon from 'components/icon/KeyboardArrowUp';

// Custom Types
export interface InstallationButtonProps {}

const InstallationButton: FC<InstallationButtonProps> = (props) => {
  // States
  const [mode, setMode] = React.useState<'npm' | 'yarn'>('npm');

  // Hooks
  const theme = useTheme();

  // Utilities
  const toggleMode = () => setMode(mode === 'npm' ? 'yarn' : 'npm');

  return (
    <Stack
      sx={{
        minWidth: '20rem',
        height: '4rem',
        width: '100%',
        borderBottom: '2px solid',
        borderColor: theme.palette.divider,
      }}
      spacing={2}
    >
      <Stack direction='column' spacing={0}>
        <Box onClick={toggleMode}>
          <KeyboardArrowUpIcon
            fontSize='small'
            sx={{
              cursor: 'pointer',
              color: 'text.secondary',
              ':hover': { color: 'text.primary' },
            }}
          />
        </Box>
        <Box onClick={toggleMode}>
          <KeyboardArrowUpIcon
            fontSize='small'
            sx={{
              transform: 'rotateX(-180deg)',
              cursor: 'pointer',
              color: 'text.secondary',
              ':hover': { color: 'text.primary' },
            }}
          />
        </Box>
      </Stack>
      <BodyOne component='code'>
        {mode === 'npm' ? 'npm i contenido@latest' : 'yarn add contenido'}
      </BodyOne>
      <Stack>
        <ContentCopyIcon />
      </Stack>
    </Stack>
  );
};

export default InstallationButton;
