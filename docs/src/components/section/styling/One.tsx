import * as React from 'react';

// Types
import Stack from 'components/core/Stack';
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import Container from 'components/core/Container';
import Grid from 'components/core/Grid';
import HeadingTwo from 'components/core/HeadingTwo';
import MenuItem from 'components/core/MenuItem';
import type { FC } from 'react';
import BodyTwo from 'components/core/BodyTwo';
import ButtonGroup from 'components/core/ButtonGroup';
import SpacedBox from 'components/core/SpacedBox';
import Link from 'components/core/Link';

// Custom Types
export interface StylingOneProps {}
type UIMode = 'MUI' | 'Bootstrap' | 'tailwind';

const StylningOne: FC<StylingOneProps> = () => {
  // States
  const [mode, setMode] = React.useState<UIMode>('MUI');
  const [styles, setStyles] = React.useState<('b' | 'i' | 'u')[]>(['i']);

  // Utilities
  const updateMode = (m: UIMode) => () => setMode(m);

  const toggleStyles = (key: 'b' | 'i' | 'u') => () => {
    const updatedStyles = [...styles];

    if (styles.includes(key)) {
      const index = updatedStyles.indexOf(key);
      if (index > -1) updatedStyles.splice(index, 1);
    } else {
      updatedStyles.push(key);
    }

    setStyles(updatedStyles);
  };

  return (
    <Container sx={{ py: '3rem', minHeight: '50vh' }}>
      <HeadingTwo color='primary.main' mb={4}>
        Fully Customizable
      </HeadingTwo>
      <Box
        sx={({ breakpoints }) => ({
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0.5rem',
          [breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: '1rem',
          },
        })}
      >
        <Stack
          direction='column'
          display='inline-flex'
          spacing={2}
          sx={({ breakpoints }) => ({
            width: '49%',
            [breakpoints.down('md')]: { width: '100%' },
          })}
        >
          <BodyOne>
            You can entireliy mix contenido with UI libraries like MUI,
            bootstrap, tailwind, ant design, grommet and ...
          </BodyOne>
        </Stack>
        <Stack
          spacing={0}
          sx={({ breakpoints }) => ({
            display: 'inline-flex',
            borderRadius: '1rem',
            p: '1rem',
            background: '#edf7fe',
            width: '49%',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'flex-start',
            [breakpoints.down('md')]: {
              width: '100%',
            },
          })}
        >
          <SpacedBox>
            <Stack>
              <ButtonGroup sx={{ height: '2.5rem' }}>
                <Button
                  onClick={toggleStyles('b')}
                  variant={styles.includes('b') ? 'contained' : 'outlined'}
                >
                  B
                </Button>
                <Button
                  onClick={toggleStyles('i')}
                  variant={styles.includes('i') ? 'contained' : 'outlined'}
                >
                  I
                </Button>
                <Button
                  onClick={toggleStyles('u')}
                  variant={styles.includes('u') ? 'contained' : 'outlined'}
                >
                  U
                </Button>
              </ButtonGroup>
            </Stack>
            <BodyOne color='text.secondary'>{mode}</BodyOne>
          </SpacedBox>
          <BodyTwo
            sx={{
              border: '1px solid',
              borderRadius: '0.25rem',
              borderColor: 'text.disabled',
              color: 'text.secondary',
              width: '100%',
              minHeight: '5rem',
              fontSize: '1rem',
              fontWeight: styles.includes('b') ? 'bold' : 'normal',
              fontStyle: styles.includes('i') ? 'italic' : 'normal',
              textDecoration: styles.includes('u') ? 'underline' : 'none',
              p: '0.5rem 0.75rem',
            }}
          >
            Create your editor toolbar with your favorite UI with{' '}
            <Link href='/' underline='hover'>
              Contenido
            </Link>
            .
          </BodyTwo>
        </Stack>
      </Box>
    </Container>
  );
};

export default StylningOne;
