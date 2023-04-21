// Types
import type { FC } from 'react';

// Custom Core Components
import CenterBox from 'components/core/CenterBox';
import Container from 'components/core/Container';
import HeadingOne from 'components/core/HeadingOne';
import HeadingTwo from 'components/core/HeadingTwo';
import Link from 'components/core/Link';

// Custom Types
export interface PostDetailsProps {}

const PostNotFound: FC<PostDetailsProps> = () => {
  return (
    <Container
      sx={{ height: '85vh', display: 'flex', flexDirection: 'column' }}
    >
      <CenterBox
        sx={{
          flexDirection: 'column',
          alignItems: 'start',
          flexGrow: 1,
          height: '100%',
        }}
      >
        <HeadingOne>404!</HeadingOne>
        <HeadingTwo>Sorry, couldn&apos;t find what you want :(</HeadingTwo>
        <Link href='/blog' underline='always' color='text.secondary'>
          Check out all blog posts &rarr;
        </Link>
      </CenterBox>
    </Container>
  );
};

export default PostNotFound;
