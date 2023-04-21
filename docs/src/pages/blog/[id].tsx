import { useEffect, useState } from 'react';

// Types
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';

// Custom Layout Components
import PageLayout from 'components/layout/Page';

// Custom Section Components
import FooterOne from 'components/section/footer/One';
import PostDetails from 'components/section/posts/Post';
import PostNotFound from 'components/section/posts/NotFound';

// Custom Core Components
import Box from 'components/core/Box';

// Custom Utilities
import { getAllBlogPostsPaths, getBlogData } from 'utilities/blog';

// Custom Types
import type { BlogPostProps } from 'types/blog';
export interface BlogPostPageProps {
  post: string | null;
}

const BlogPostPage: FC<BlogPostPageProps> = (props) => {
  // Props
  const { post } = props;

  // States
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<BlogPostProps | null>(null);

  // Hooks
  useEffect(() => {
    if (post) {
      setData(JSON.parse(post));
      setLoading(false);
    }
  }, [post]);

  return (
    <PageLayout>
      {loading ? (
        <Box />
      ) : data ? (
        <PostDetails post={data} />
      ) : (
        <PostNotFound />
      )}
      <FooterOne sx={{ pt: '2rem' }} />
    </PageLayout>
  );
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogPostsPaths();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const post = getBlogData(id);

  return {
    props: { post: JSON.stringify(post) },
  };
};
