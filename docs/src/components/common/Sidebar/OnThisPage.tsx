import { useRouter } from 'next/router';

// Types
import type { FC } from 'react';

// Custom Core
import AppBarSpacer from 'components/core/AppBarSpacer';
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import Divider from 'components/core/Divider';
import Link from 'components/core/Link';

// Custom Utilities
import { fixHref, getPurePath } from 'utilities/helper/link';

// Custom Data
import links from 'data/links.json';

// Custom Types
export interface OnThisPageProps {
  headings?: { [key: string]: string[] };
}

const OnThisPage: FC<OnThisPageProps> = (props) => {
  // Props
  const { headings } = props;

  // Hooks
  const path = useRouter().asPath;

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
          href={`${links.docsEdit}${getPurePath(path)}.mdx`}
          variant='caption'
          color='text.secondary'
          underline='hover'
          target='_blank'
          sx={{ textTransform: 'none' }}
        >
          Edit this page on GitHub &rarr;
        </Link>
      </Box>
    </Box>
  );
};

export default OnThisPage;
