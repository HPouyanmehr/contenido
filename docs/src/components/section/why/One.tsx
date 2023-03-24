import * as React from 'react';

// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import Container from 'components/core/Container';
import HeadingThree from 'components/core/HeadingThree';
import HeadingTwo from 'components/core/HeadingTwo';
import Stack from 'components/core/Stack';

// Custom Icon Components
import ArticleIcon from 'components/icon/Article';
import AutoFixHighIcon from 'components/icon/AutoFixHigh';
import BoltIcon from 'components/icon/Bolt';
import ContenidoIcon from 'components/icon/Contenido';

// Custom Types
import type { SvgIconProps } from 'components/core/SvgIcon';
export interface WhyContenidoProps {}

interface CardData {
  Icon: FC<SvgIconProps>;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    Icon: ContenidoIcon,
    title: '100% \nCustomizable',
    description:
      'You can create a rich text editor that you want. The one that fits your website design.',
  },
  {
    Icon: BoltIcon,
    title: 'Easy \nto Use',
    description: `Utilities have been declared clearly, So you won't have any tension in using them.`,
  },
  {
    Icon: AutoFixHighIcon,
    title: 'Utility \nFirst Lib',
    description:
      'Save your time to make your desired editor, not the repetitive process of handling things.',
  },
  {
    Icon: ArticleIcon,
    title: 'Well \nDocumented',
    description:
      'Although the library core is on top of draft-js, the documentation will be something else.',
  },
];

const WhyContenido: FC<WhyContenidoProps> = (props) => {
  return (
    <Container sx={{ py: '3rem' }}>
      <HeadingTwo color='primary.main'>Why Contenido?</HeadingTwo>
      <Stack alignItems='flex-start' direction='column' spacing={2}>
        <Stack alignItems='flex-start' direction='column' spacing={0}>
          <BodyOne>
            Mainly, Contenido helps you to create the editore you&apos;ve ever
            wanted,
          </BodyOne>
          <BodyOne>Also, these are some of contenido&apos;s benefits.</BodyOne>
        </Stack>
        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
          {cards.map((card, index) => (
            <Box
              key={card.title + index}
              sx={({ breakpoints }) => ({
                display: 'inline-flex',
                flexDirection: 'column',
                borderRadius: '0.5rem',
                border: '2px solid',
                borderColor: 'primary.main',
                padding: '2rem 1rem',
                width: '24%',
                [breakpoints.down('md')]: { width: '49%', mb: '0.5rem' },
                [breakpoints.down('sm')]: { width: '100%', mb: '0.5rem' },
              })}
            >
              {React.createElement(card.Icon, {
                sx: { fontSize: '4rem', color: 'primary.main' },
              })}
              <HeadingThree whiteSpace='pre-wrap'>{card.title}</HeadingThree>
              <BodyOne>{card.description}</BodyOne>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default WhyContenido;
