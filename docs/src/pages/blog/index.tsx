// Types
import type { FC } from 'react';
import type { GetStaticProps } from 'next';

// Custom Layout Components
import PageLayout from 'components/layout/Page';

// Custom Section Components
import BlogLanding from 'components/section/landing/Blog';
import BlogPosts from 'components/section/posts/Blog';
import FooterOne from 'components/section/footer/One';

// Custom Utilities
import { getPostCardsData } from 'utilities/blog';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface BlogPageProps {
  postCards: string;
}

const Blog: FC<BlogPageProps> = (props) => {
  // Props
  const { postCards } = props;

  return (
    <PageLayout>
      <BlogLanding />
      <BlogPosts posts={JSON.parse(postCards)} />
      <FooterOne
        sx={({ palette }) => ({
          backgroundColor: (palette.background as CustomTypeBackground).card,
          width: '100%',
        })}
      />
    </PageLayout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postCards = getPostCardsData();

  return {
    props: { postCards: JSON.stringify(postCards) },
  };
};
