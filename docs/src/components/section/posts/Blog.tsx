// Types
import type { FC } from 'react';

// Custom Common Components
import BlogPostCard from 'components/common/Card/BlogPost';

// Custom Core Components
import Box from 'components/core/Box';
import Container from 'components/core/Container';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
import type { BlogPostProps } from 'types/blog';
export interface BlogPostsProps {
  posts: Omit<BlogPostProps, 'body'>[];
}

const BlogPosts: FC<BlogPostsProps> = (props) => {
  // Props
  const { posts } = props;

  return (
    <Box
      sx={({ breakpoints, palette }) => ({
        backgroundColor: (palette.background as CustomTypeBackground).card,
        minHeight: '100vh',
        [breakpoints.down('md')]: { pb: '2rem' },
      })}
    >
      <Container>
        <Box
          sx={({ breakpoints }) => ({
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            position: 'relative',
            py: 1,
            [breakpoints.up('md')]: {
              top: '-5rem',
              p: 1,
            },
          })}
        >
          {posts.map((post) => (
            <BlogPostCard key={post.title} post={post} sx={{ width: '100%' }} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPosts;
