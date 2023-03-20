// Types
import type { FC } from 'react';

// Custom Core
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import AppBarSpacer from 'components/core/AppBarSpacer';
import Link from 'components/core/Link';
import { fixHref } from 'utilities/helper/link';

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
          height: '91%',
          p: spacing(2, 1),
        })}
      >
        <BodyOne gutterBottom>On this page</BodyOne>
        {headings &&
          Object.keys(headings).map((headingTwo, index) => (
            <Box key={headingTwo + index}>
              <Link href={fixHref(`#${headingTwo}`)} color='text.secondary'>
                {headingTwo}
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default OnThisPage;
