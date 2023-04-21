import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Types
import type { ParsedUrlQuery } from 'querystring';

// Custom Utilities
import { calcReadingTime, extractHeadings } from 'utilities/helper/markdown';
import { sortByDate } from 'utilities/helper/sort';

// Custom Types
import type { DocProps } from 'types/docs';
import type { BlogPostCardProps } from 'types/blog';

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

export const getDocData = (
  sectionName: string,
  docId: string
): DocProps | null => {
  const sections = fs.readdirSync(blogPostsDir);
  const section = sections.find((section) => section === sectionName);

  if (section) {
    const docsDir = path.join(blogPostsDir, section);
    const docNames = fs.readdirSync(docsDir);

    const id = docNames.find((id) => id.replace(/\.mdx$/, '') === docId);

    if (id && id !== '_conf.json') {
      const fullPath = path.join(docsDir, id);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');

      const matterResult = matter(fileContents);
      const headings = extractHeadings(matterResult.content);

      return {
        id: docId,
        section: sectionName,
        title: matterResult.data.title,
        content: matterResult.content,
        headings,
      };
    }
  }

  return null;
};
