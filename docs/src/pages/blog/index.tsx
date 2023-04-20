// Types
import type { FC } from 'react';

// Custom Layout Components
import PageLayout from 'components/layout/Page';

// Custom Section Components
import BlogLanding from 'components/section/landing/Blog';
import BlogPosts from 'components/section/posts/Blog';
import FooterOne from 'components/section/footer/One';

// Custom Types
import type { CustomTypeBackground } from 'types/common/theme';
export interface BlogPageProps {}

const Blog: FC<BlogPageProps> = (props) => {
  return (
    <PageLayout>
      <BlogLanding />
      <BlogPosts />
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
