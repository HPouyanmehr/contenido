import * as React from 'react';
import { Roboto } from '@next/font/google';

// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import Container from 'components/core/Container';
import HeadingTwo from 'components/core/HeadingTwo';
import MenuItem from 'components/core/MenuItem';
import BodyTwo from 'components/core/BodyTwo';
import SpacedBox from 'components/core/SpacedBox';
import ButtonGroup from 'components/core/ButtonGroup';
import Menu from 'components/core/Menu';

// Custom Icon Components
import ArrowDropDownIcon from 'components/icon/ArrowDropDown';
import CheckIcon from 'components/icon/Check';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface StylingTwoProps {}
type EditMode = 'size' | 'color' | 'transform' | 'family';
interface CustomEditorStyles {
  size: 12 | 16 | 20;
  color: string;
  transform: string;
  family: 'roboto' | 'cascadia';
}

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

const StylingTwo: FC<StylingTwoProps> = () => {
  // States
  const [mode, setMode] = React.useState<EditMode>('color');
  const [styles, setStyles] = React.useState<CustomEditorStyles>({
    color: 'text.primary',
    family: 'roboto',
    size: 16,
    transform: 'capitalize',
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Utilities
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleFontSize = (size: 12 | 16 | 20) => () =>
    setStyles((prev) => ({ ...prev, size }));

  const toggleColor = (color: string) => () =>
    setStyles((prev) => ({ ...prev, color }));

  const toggleTransform = (transform: string) => () =>
    setStyles((prev) => ({
      ...prev,
      transform: transform === prev.transform ? 'normal' : transform,
    }));

  const toggleFamily = (family: string) => () =>
    setStyles((prev) => ({ ...prev, family: family as 'roboto' | 'cascadia' }));

  return (
    <Container sx={{ py: '3rem', minHeight: '50vh' }}>
      <HeadingTwo color='primary.main'>Flexible Styling</HeadingTwo>
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
            Simply implement your needs for text styling. Change the text font
            family, size, color, transform, or whatever else that you can do
            with pure CSS.
          </BodyOne>
        </Box>
        <Box
          sx={({ breakpoints, palette }) => ({
            background: (palette.background as CustomTypeBackground).card,
            p: '1rem',
            borderRadius: '1rem',
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '50%',
            [breakpoints.down('md')]: { width: '100%' },
          })}
        >
          <SpacedBox>
            <ButtonGroup sx={{ maxWidth: '70%', overflowX: 'auto' }}>
              {mode === 'size' &&
                [12, 16, 20].map((size, index) => (
                  <Button
                    key={size * (index + Math.random() + 1)}
                    onClick={toggleFontSize(size as 12 | 16 | 20)}
                    variant={size === styles.size ? 'contained' : 'outlined'}
                  >
                    {size}
                  </Button>
                ))}
              {mode === 'color' &&
                ['#b5f54c', '#f58c4c', '#4cb5f5', 'text.primary'].map(
                  (color) => (
                    <Box
                      key={color + Math.random()}
                      sx={{
                        width: '2rem',
                        height: '2rem',
                        backgroundColor: color,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'white',
                        alignItems: 'center',
                      }}
                      onClick={toggleColor(color)}
                    >
                      {color === styles.color && <CheckIcon />}
                    </Box>
                  )
                )}
              {mode === 'transform' &&
                ['uppercase', 'capitalize', 'lowercase'].map(
                  (transform, index) => (
                    <Button
                      key={transform + (index + Math.random() + 1)}
                      onClick={toggleTransform(transform)}
                      variant={
                        transform === styles.transform
                          ? 'contained'
                          : 'outlined'
                      }
                    >
                      {transform === 'capitalize'
                        ? 'Tt'
                        : transform === 'uppercase'
                        ? 'TT'
                        : 'tt'}
                    </Button>
                  )
                )}
              {mode === 'family' &&
                ['roboto', 'cascadia'].map((family, index) => (
                  <Button
                    key={family + (index + Math.random() + 1)}
                    onClick={toggleFamily(family)}
                    variant={
                      family === styles.family ? 'contained' : 'outlined'
                    }
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {family}
                  </Button>
                ))}
            </ButtonGroup>
            <Button
              id='style-button'
              aria-controls={open ? 'style-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={
                <ArrowDropDownIcon
                  sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              }
              onClick={handleOpen}
              sx={{ textTransform: 'capitalize' }}
            >
              {mode}
            </Button>
            <Menu
              id='style-menu'
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorEl={anchorEl}
              PaperProps={{ sx: { p: 0, m: 0 } }}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'style-button',
                sx: { p: '0.5rem' },
              }}
            >
              {(['size', 'color', 'family', 'transform'] as EditMode[]).map(
                (editMode, index) => (
                  <MenuItem
                    sx={{
                      color:
                        mode === editMode ? 'primary.main' : 'text.primary',
                      textTransform: 'capitalize',
                    }}
                    key={`${editMode}-${index}-${Math.random()}`}
                    onClick={() => {
                      setMode(editMode);
                      handleClose();
                    }}
                  >
                    Font {editMode}
                  </MenuItem>
                )
              )}
            </Menu>
          </SpacedBox>
          <BodyTwo
            className={
              styles.family === 'roboto' ? roboto.className : undefined
            }
            sx={{
              border: '1px solid',
              borderRadius: '0.25rem',
              borderColor: 'text.disabled',
              color: styles.color,
              width: '100%',
              minHeight: '8rem',
              fontSize: `${styles.size}px`,
              textTransform: styles.transform,
              p: '0.5rem 0.75rem',
            }}
          >
            This is a basic example of custom text styling. You can create MORE
            styles based on your needs.
          </BodyTwo>
        </Box>
      </Box>
    </Container>
  );
};

export default StylingTwo;
