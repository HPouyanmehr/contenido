import { useTheme, useMediaQuery } from '@mui/material';

// Types
import type { FC } from 'react';

// Custom Core Components
import Paper from 'components/core/Paper';

// Custom Types
import type { PaperProps } from 'components/core/Paper';
import Container from 'components/core/Container';
import Stack from 'components/core/Stack';
import Divider from 'components/core/Divider';
import BoldIconButton from 'components/common/IconButton/Bold';
import StackDivider from 'components/core/StackDivider';
import UnderlinedIconButton from 'components/common/IconButton/Underline';
import ItalicIconButton from 'components/common/IconButton/Italic';
import AlignLeftIconButton from 'components/common/IconButton/AlignLeft';
import AlignCenterIconButton from 'components/common/IconButton/AlignCenter';
import AlignJustifyIconButton from 'components/common/IconButton/AlignJustify';
import LinkIconButton from 'components/common/IconButton/Link';
import PhotoIconButton from 'components/common/IconButton/Photo';
import ListNumberedIconButton from 'components/common/IconButton/ListNumbered';
import ListBulletedIconButton from 'components/common/IconButton/ListBulleted';
import QuoteIconButton from 'components/common/IconButton/Quote';
import Select from 'components/core/Select';
import MenuItem from 'components/core/MenuItem';
import TextField from 'components/core/TextField';
import Box from 'components/core/Box';
import AlignRightIconButton from 'components/common/IconButton/AlignRight';
import IndentIncreaseIconButton from 'components/common/IconButton/IndentIncrease';
import IndentDecreaseIconButton from 'components/common/IconButton/IndentDecrease';
import StrikethroughIconButton from 'components/common/IconButton/Strikethrough';
import MoreIconButton from 'components/common/IconButton/More';

const DemoOne: FC<PaperProps> = (props) => {
  // Props
  const { sx, ...otherProps } = props;

  // Hooks
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isUpXl = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box
      sx={({ breakpoints }) => ({
        backgroundColor: '#edf7fe',
        [breakpoints.down('md')]: { pb: '2rem' },
      })}
    >
      <Container>
        <Paper
          sx={({ shadows, breakpoints }) => ({
            boxShadow: shadows[6],
            position: 'relative',
            py: 1,
            [breakpoints.up('md')]: {
              top: '-5rem',
              p: 1,
            },
          })}
          {...otherProps}
        >
          <Stack
            direction='column'
            alignItems='flex-start'
            spacing={2}
            sx={{ padding: '1rem 1.5rem' }}
          >
            <Stack>
              <Stack divider={<StackDivider />}>
                <Stack>
                  <Select sx={{ width: '10rem', height: '2.5rem' }} value='p'>
                    <MenuItem value='p'>Paragraph</MenuItem>
                    <MenuItem value='h2'>Heading Two</MenuItem>
                    <MenuItem value='h3'>Heading Three</MenuItem>
                    <MenuItem value='h4'>Heading Four</MenuItem>
                  </Select>
                </Stack>
                {isUpSm && (
                  <Stack>
                    <BoldIconButton />
                    <ItalicIconButton />
                    <UnderlinedIconButton />
                    <StrikethroughIconButton />
                  </Stack>
                )}
                {isUpSm && (
                  <Stack>
                    <AlignLeftIconButton />
                    <AlignCenterIconButton />
                    <AlignRightIconButton />
                    <AlignJustifyIconButton />
                  </Stack>
                )}
                {isUpLg && (
                  <Stack>
                    <ListBulletedIconButton />
                    <ListNumberedIconButton />
                    <IndentIncreaseIconButton />
                    <IndentDecreaseIconButton />
                    <QuoteIconButton />
                  </Stack>
                )}
                {isUpXl && (
                  <Stack>
                    <LinkIconButton />
                    <PhotoIconButton />
                  </Stack>
                )}
              </Stack>
              {!isUpXl && <MoreIconButton />}
            </Stack>
            <TextField
              placeholder='Contenido is so cool!'
              fullWidth
              multiline
              rows={20}
              InputProps={{ sx: { borderRadius: '1rem' } }}
            />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default DemoOne;
