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

// Custom Utilities
import { getDateString } from 'utilities/helper/date';

// Custom Types
import type { BoxProps } from 'components/core/Box';
import type { BlogPostCardProps } from 'types/blog';
export interface BlogPostCardComponentProps extends BoxProps {
  post: BlogPostCardProps;
  hideDescription?: boolean;
}

const BlogPostCard: FC<BlogPostCardComponentProps> = (props) => {
  // Props
  const { post, hideDescription, sx } = props;

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
          <BodyTwo sx={{ color: 'white' }}>{post.readTime} min</BodyTwo>
        </Box>
        <Image
          alt=''
          src='/assets/images/blog/an-introduction-to-draft-js.jpg'
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box sx={{ p: '0 1rem 1rem' }}>
        <HeadingTwo>{post.title}</HeadingTwo>
        {!hideDescription && <BodyOne>{post.description}</BodyOne>}
      </Box>
      <Box
        sx={{
          p: '0 1rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <BodyTwo>{getDateString(post.date)}</BodyTwo>
        <Link href={`/blog/${post.id}`} underline='hover'>
          Read &rarr;
        </Link>
      </Box>
    </Box>
  );
};

export default BlogPostCard;
