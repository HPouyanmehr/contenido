import { useMediaQuery, useTheme } from '@mui/material';

// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';
import CenterBox from 'components/core/CenterBox';
import Container from 'components/core/Container';
import HeadingOne from 'components/core/HeadingOne';

// Custom Common Components
import Box from 'components/core/Box';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface BlogLandingProps {}

const BlogLanding: FC<BlogLandingProps> = (props) => {
  // Hooks
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={({ palette }) => ({
        backgroundImage: `linear-gradient(${
          (palette.background as CustomTypeBackground).default
        } 60%, ${(palette.background as CustomTypeBackground).card})`,
      })}
    >
      <Container>
        <CenterBox flexDirection='column' minHeight='92vh'>
          <HeadingOne textAlign='left'>
            Discover, Build,
            <br />
            Get notified and be up to date...
          </HeadingOne>
        </CenterBox>
      </Container>
    </Box>
  );
};

export default BlogLanding;
