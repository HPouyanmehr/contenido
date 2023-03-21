// Types
import type { FC } from 'react';

// Custom Core
import BodyOne from 'components/core/BodyOne';
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import AppBarSpacer from 'components/core/AppBarSpacer';
import Link from 'components/core/Link';
import { fixHref } from 'utilities/helper/link';
import Stack from 'components/core/Stack';
import Divider from 'components/core/Divider';

// Custom Types
export interface OnThisPageProps {
  headings?: { [key: string]: string[] };
}

const OnThisPage: FC<OnThisPageProps> = (props) => {
  // Props
  const { headings } = props;

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
          gap: 2,
          height: '91%',
          p: spacing(2, 1),
        })}
      >
        <BodyTwo gutterBottom>On this page</BodyTwo>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {headings &&
            Object.keys(headings).map((headingTwo, index) => (
              <Box
                key={headingTwo + index}
                sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
              >
                <Link
                  href={fixHref(`#${headingTwo}`)}
                  variant='body2'
                  color='text.secondary'
                  fontWeight='bold'
                >
                  {headingTwo}
                </Link>
                {headings[headingTwo].map((headingThree, index) => (
                  <Link
                    href={fixHref(`#${headingThree}`)}
                    variant='body2'
                    color='text.secondary'
                    sx={{ marginLeft: 2 }}
                    key={headingThree + index}
                  >
                    {headingThree}
                  </Link>
                ))}
              </Box>
            ))}
        </Box>
        <Divider />
        <Link
          href='/'
          variant='caption'
          color='text.secondary'
          underline='hover'
          sx={{ textTransform: 'none' }}
        >
          Edit this page on GitHub &rarr;
        </Link>
      </Box>
    </Box>
  );
};

export default OnThisPage;
