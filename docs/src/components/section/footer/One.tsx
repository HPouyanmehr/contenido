// Types
import type { FC } from 'react';

// Custom Core Components
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import Container from 'components/core/Container';
import Divider from 'components/core/Divider';
import Stack from 'components/core/Stack';

// Custom Common Components
import GitHubIconButtonLink from 'components/common/Link/GitHub';

// Custom Types
import type { BoxProps } from 'components/core/Box';
import NPMIconButtonLink from 'components/common/Link/NPM';
export interface FooterOneProps extends BoxProps {}

const FooterOne: FC<FooterOneProps> = (props) => {
  // Props
  const { sx, ...otherProps } = props;

  return (
    <Box sx={sx} {...otherProps}>
      <Container>
        <Divider />
        <Box
          sx={{
            pt: '3rem',
            pb: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={({ breakpoints }) => ({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              [breakpoints.down('md')]: {
                flexDirection: 'column',
              },
            })}
          >
            <BodyTwo
              sx={({ breakpoints }) => ({
                [breakpoints.down('md')]: { textAlign: 'center' },
              })}
            >
              Made with ❤ for a better experience
            </BodyTwo>
            <Stack>
              <NPMIconButtonLink />
              <GitHubIconButtonLink />
            </Stack>
          </Box>
          <BodyTwo textAlign='center' color='text.secondary'>
            MIT &copy; 2023 - This site does not track you.
          </BodyTwo>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterOne;
