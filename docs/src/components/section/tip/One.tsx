// Types
import type { FC } from 'react';

// Custom Core Components
import CenterBox from 'components/core/CenterBox';
import Container from 'components/core/Container';
import HeadingTwo from 'components/core/HeadingTwo';

// Custom Hooks
import { useThemeModeContext } from 'store/context/themeMode';

// Custom Types
export interface TipOneProps {}

const TipOne: FC<TipOneProps> = (props) => {
  // Hooks
  const { mode } = useThemeModeContext();

  return (
    <CenterBox
      sx={({ breakpoints }) => ({
        minHeight: '50vh',
        bgcolor: mode === 'dark' ? '#1C4259' : '#163649',
        '& .tipHighlight': {
          fontWeight: 700,
        },
        ':hover': { '& .tipHighlight': { textDecoration: 'underline' } },
        [breakpoints.down('md')]: {
          '& .tipHighlight': { textDecoration: 'underline' },
          py: '3rem',
        },
      })}
    >
      <Container>
        <HeadingTwo
          textAlign='center'
          fontWeight='400'
          variant='body1'
          color='white'
        >
          Contenido doesn’t aim to give you a ready to use text editor, its odd
          and you can find some editors that works good and are enough for your
          needs. The main purpose is to give you{' '}
          <span className='tipHighlight'>
            the ability of creating your own custom look rich text editor a lot
            faster and easier.
          </span>
        </HeadingTwo>
      </Container>
    </CenterBox>
  );
};

export default TipOne;
