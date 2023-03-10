// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';
import Container from 'components/core/Container';
import HeadingTwo from 'components/core/HeadingTwo';
import Grid from 'components/core/Grid';
import ButtonLink from 'components/core/ButtonLink';
import Button from 'components/core/Button';
import Stack from 'components/core/Stack';
import Link from 'components/core/Link';
import Box from 'components/core/Box';
import IconButton from 'components/core/IconButton';
import CopyToClip from 'components/common/IconButton/CopyToClip';
import SpacedBox from 'components/core/SpacedBox';
import BodyTwo from 'components/core/BodyTwo';

// Custom Types
export interface HowToInstallProps {}

const HowToInstall: FC<HowToInstallProps> = () => {
  return (
    <Container sx={{ minHeight: '50vh', py: '3rem' }}>
      <HeadingTwo color='primary.main'>Let&apos;s Start</HeadingTwo>
      <Box
        sx={({ breakpoints }) => ({
          display: 'flex',
          gap: '0.5rem',
          [breakpoints.down('md')]: { flexDirection: 'column', gap: '2rem' },
        })}
      >
        <Box
          sx={({ breakpoints }) => ({
            display: 'inline-flex',
            width: '50%',
            [breakpoints.down('md')]: { width: '100%' },
          })}
        >
          <BodyOne>
            Simply implement your needs of text styling. Change the text font
            family, size, color, transform or whatever else that you can do with
            pure CSS.
          </BodyOne>
        </Box>
        <Box
          sx={({ breakpoints }) => ({
            background: '#edf7fe',
            p: '1rem',
            borderRadius: '1rem',
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '50%',
            [breakpoints.down('md')]: { width: '100%' },
          })}
        >
          <Box
            sx={({ breakpoints }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <SpacedBox>
              <ButtonLink href='/docs' variant='outlined'>
                Documentation
              </ButtonLink>
              <Link href='/examples' underline='hover'>
                Examples &rarr;
              </Link>
            </SpacedBox>
          </Box>
          <SpacedBox
            sx={{
              border: '1px solid',
              borderRadius: '0.25rem',
              borderColor: 'text.disabled',
              width: '100%',
              p: '0.25rem 0.75rem',
              cursor: 'copy',
            }}
          >
            <code>npm i contenido@latest</code>
            <CopyToClip color='primary' />
          </SpacedBox>
        </Box>
      </Box>
    </Container>
  );
};

export default HowToInstall;
