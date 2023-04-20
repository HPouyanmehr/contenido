import Image from 'next/image';

// Types
import type { FC } from 'react';

// Custom Core Components
import BodyOne from 'components/core/BodyOne';
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import HeadingTwo from 'components/core/HeadingTwo';
import Link from 'components/core/Link';

// Custom Icon Components
import HourglassTopIcon from 'components/icon/HourglassTop';

// Custom Types
import type { BoxProps } from 'components/core/Box';
export interface BlogPostCardProps extends BoxProps {
  hideDescription?: boolean;
}

const BlogPostCard: FC<BlogPostCardProps> = (props) => {
  // Props
  const { hideDescription, sx } = props;

  return (
    <Box
      sx={{
        borderRadius: '0.5rem',
        overflow: 'hidden',
        height: 'fit-content',
        boxShadow: 4,
        ':hover': {
          '.readTime': { display: 'flex' },
          boxShadow: 6,
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '15rem',
        }}
      >
        <Box
          className='readTime'
          sx={{
            display: 'none',
            alignItems: 'center',
            gap: 0.5,
            position: 'absolute',
            zIndex: 1,
            top: '1rem',
            left: '1rem',
          }}
        >
          <HourglassTopIcon sx={{ color: 'white' }} />
          <BodyTwo sx={{ color: 'white' }}>2 min</BodyTwo>
        </Box>
        <Image
          alt=''
          src='/assets/images/blog/an-introduction-to-draft-js.jpg'
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box sx={{ p: '0 1rem 1rem' }}>
        <HeadingTwo>An introduction to draft-js</HeadingTwo>
        {!hideDescription && (
          <BodyOne>
            In this post we&apos;re going to get familiar with web editors, and
            take a look at different approaches for implementing editors for the
            web.
          </BodyOne>
        )}
      </Box>
      <Box
        sx={{
          p: '0 1rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <BodyTwo>2023-04-20</BodyTwo>
        <Link href='/' underline='hover'>
          Read &rarr;
        </Link>
      </Box>
    </Box>
  );
};

export default BlogPostCard;
