// Types
import BodyOne from 'components/core/BodyOne';
import BodyTwo from 'components/core/BodyTwo';
import Box from 'components/core/Box';
import Link from 'components/core/Link';
import Image from 'next/image';
import type { FC } from 'react';

// Custom Types
export interface BlogSuggestProps {
  coverAlt?: string;
  link?: string;
}

const BlogSuggest: FC<BlogSuggestProps> = (props) => {
  // Props
  const { coverAlt, link } = props;

  return link ? (
    <Box
      sx={({ breakpoints }) => ({
        border: '2px solid',
        borderColor: 'divider',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'row',
        p: '1rem',
        gap: 2,
        my: '1rem',
        [breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      })}
    >
      <Box
        sx={({ breakpoints }) => ({
          position: 'relative',
          flexShrink: 0,
          width: 150,
          height: 100,
          [breakpoints.down('sm')]: { display: 'none' },
        })}
      >
        <Image
          alt={coverAlt ? coverAlt : link.replaceAll('-', ' ')}
          src={`/assets/images/blog/${link}.jpg`}
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '0.5rem',
            objectPosition: 'center center',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <BodyOne>Reading this post is suggested:</BodyOne>
        <BodyOne fontWeight='bold' textTransform='capitalize'>
          {link.replaceAll('-', ' ')}
        </BodyOne>
        <Link href={`/blog/${link}`} underline='hover' mt='auto'>
          Read &rarr;
        </Link>
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default BlogSuggest;
