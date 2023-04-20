// Types
import type { FC } from 'react';

// Custom Core Components
import Box from 'components/core/Box';
import Container from 'components/core/Container';
import Paper from 'components/core/Paper';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface BlogPostsProps {}

const BlogPosts: FC<BlogPostsProps> = (props) => {
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
            position: 'relative',
            py: 1,
            [breakpoints.up('md')]: {
              top: '-5rem',
              p: 1,
            },
          })}
        ></Box>
      </Container>
    </Box>
  );
};

export default BlogPosts;
