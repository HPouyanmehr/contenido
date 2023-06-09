import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Types
import type { ParsedUrlQuery } from 'querystring';

// Custom Utilities
import { calcReadingTime } from 'utilities/helper/markdown';
import { sortByDate } from 'utilities/helper/sort';

// Custom Types
import type { BlogPostCardProps, BlogPostProps } from 'types/blog';

const blogPostsDir = path.join(process.cwd(), '/src/posts');

export const getAllBlogPostsPaths = (): { params: ParsedUrlQuery }[] => {
  const posts = fs.readdirSync(blogPostsDir);

  const allDocsPaths: { params: ParsedUrlQuery }[] = [];

  posts.forEach((postFileName) =>
    allDocsPaths.push({
      params: {
        id: postFileName.replace(/\.mdx$/, ''),
      },
    })
  );

  return allDocsPaths;
};

export const getPostCardsData = (): BlogPostCardProps[] => {
  let postCards: BlogPostCardProps[] = [];

  const postFiles = fs.readdirSync(blogPostsDir);

  postFiles.forEach((postFile) => {
    const fullPath = path.join(blogPostsDir, postFile);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(content);
    const data = matterResult.data as BlogPostCardProps;

    postCards.push({
      ...data,
      id: postFile.replace(/\.mdx$/, ''),
      readTime: calcReadingTime(matterResult.content),
    });
  });

  postCards = sortByDate(postCards);

  return postCards;
};

export const getBlogData = (postId: string): BlogPostProps | null => {
  const fileNames = fs.readdirSync(blogPostsDir);

  const id = fileNames.find(
    (fileName) => fileName.replace(/\.mdx$/, '') === postId
  );

  if (id) {
    const fullPath = path.join(blogPostsDir, id);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const matterResult = matter(content);
    const data = matterResult.data as BlogPostCardProps;

    return {
      ...data,
      body: matterResult.content,
      readTime: calcReadingTime(matterResult.content),
    };
  }

  return null;
};
