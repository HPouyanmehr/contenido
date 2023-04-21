import Image from 'next/image';

// Types
import type { FC } from 'react';

// Custom Core Components
import AppBarSpacer from 'components/core/AppBarSpacer';
import BodyOne from 'components/core/BodyOne';
import Box from 'components/core/Box';
import Container from 'components/core/Container';
import HeadingOne from 'components/core/HeadingOne';

// Custom Utilities
import { getDateString } from 'utilities/helper/date';

// Custom Types
import type { BlogPostProps } from 'types/blog';
import Markdown from 'components/common/Markdown';
import { CustomTypeBackground } from 'types/common/theme';
import GitHubIcon from 'components/icon/GitHub';
import GitHubIconButtonLink from 'components/common/Link/GitHub';
import CopyToClip from 'components/common/IconButton/CopyToClip';
export interface PostDetailsProps {
  post: BlogPostProps;
}

const PostDetails: FC<PostDetailsProps> = (props) => {
  // Props
  const { post } = props;

  return (
    <Box>
      <Container>
        <AppBarSpacer />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, mb: 4 }}>
            <HeadingOne textAlign='center'>{post.title}</HeadingOne>
            <BodyOne textAlign='center'>
              Published at {getDateString(post.date)}
            </BodyOne>
          </Box>
          <Box sx={{ position: 'relative', width: '100%', height: '27rem' }}>
            <Image
              alt={post.title}
              src={`/assets/images/blog/${post.cover}.jpg`}
              fill
              style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
              sizes='100%'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'sticky', top: '1rem' }}>
              <CopyToClip color='inherit' />
            </Box>
            <Box>
              <BodyOne sx={{ mt: '0.5rem' }}>{post.readTime} min read</BodyOne>
              <Markdown blog>{post.body}</Markdown>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PostDetails;
