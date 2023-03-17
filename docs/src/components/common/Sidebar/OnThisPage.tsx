// Types
import type { FC } from 'react';

// Custom Core
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import AppBarSpacer from 'components/core/AppBarSpacer';

// Custom Types
export interface OnThisPageProps {}

const OnThisPage: FC<OnThisPageProps> = () => {
  return (
    <Box
      sx={({}) => ({
        height: '100vh',
        top: 0,
        right: 0,
        minWidth: '17rem',
        maxWidth: '17rem',
        position: 'fixed',
      })}
    >
      <AppBarSpacer />
      <Box
        sx={({ spacing }) => ({
          display: 'flex',
          flexDirection: 'column',
          height: '91%',
          justifyContent: 'space-between',
          p: spacing(2, 1),
        })}
      >
        <BodyOne>On this page</BodyOne>
      </Box>
    </Box>
  );
};

export default OnThisPage;
