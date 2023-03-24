import { useMediaQuery, useTheme } from '@mui/material';

// Types
import type { FC } from 'react';

// Custom Core Components
import ButtonLink from 'components/core/ButtonLink';
import CenterBox from 'components/core/CenterBox';
import Container from 'components/core/Container';
import HeadingOne from 'components/core/HeadingOne';
import Link from 'components/core/Link';
import Stack from 'components/core/Stack';

// Custom Common Components
import CopyToClip from 'components/common/IconButton/CopyToClip';
import Box from 'components/core/Box';
import InstallationButton from 'components/common/Button/Installation';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface LandingOneProps {}

const LandingOne: FC<LandingOneProps> = (props) => {
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
          <HeadingOne textAlign='center'>
            Contenido is a set of tools to help you create your own editor on
            top of{' '}
            <Link
              href='https://github.com/facebookarchive/draft-js'
              target='_blank'
              underline='hover'
            >
              draft-js
            </Link>{' '}
            without thinking about how to handle things.
          </HeadingOne>
          <Stack
            spacing={2}
            direction={isDownSm ? 'column' : 'row'}
            justifyContent='center'
          >
            <ButtonLink
              href='/docs'
              size='large'
              variant='contained'
              sx={{ borderRadius: '2rem 2rem 0 2rem' }}
            >
              Explore the docs
            </ButtonLink>
            <Link href='/examples' underline='hover'>
              examples &rarr;
            </Link>
          </Stack>
        </CenterBox>
      </Container>
    </Box>
  );
};

export default LandingOne;
