import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Types
import type { ParsedUrlQuery } from 'querystring';

// Custom Utilities
import { extractHeadings } from 'utilities/helper/markdown';

// Custom Types
import type {
  DocProps,
  DocSdiebarItemProps,
  DocSidebarProps,
} from 'types/docs';

const docsDirectory = path.join(process.cwd(), '/src/docs');

export const getAllDocsPaths = (): { params: ParsedUrlQuery }[] => {
  const sections = fs.readdirSync(docsDirectory);

  const allDocsPaths: { params: ParsedUrlQuery }[] = [];

  sections.forEach((sectionName) => {
    const docsDir = path.join(docsDirectory, sectionName);
    const docNames = fs.readdirSync(docsDir);

    docNames.forEach((docName) =>
      allDocsPaths.push({
        params: {
          id: docName.replace(/\.mdx$/, ''),
          section: sectionName,
        },
      })
    );
  });

  return allDocsPaths;
};

export const getDocsSidebar = (sectionName?: string): DocSidebarProps[] => {
  const sidebar: DocSidebarProps[] = [];

  const sections = fs.readdirSync(docsDirectory);

  sections.forEach((section) => {
    const selected: boolean = sectionName === section ? true : false;
    const docsDir = path.join(docsDirectory, section);
    const fileNames = fs.readdirSync(docsDir);
    const items: DocSdiebarItemProps[] = [];

    fileNames.forEach((fileName, index) => {
      const fullPath = path.join(docsDir, fileName);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const matterResult = matter(content);

      items.push({
        link: fileName.replace(/\.mdx/, ''),
        title: fileName.replace(/\.mdx/, ''),
        sort: matterResult.data.sort || index,
      });
    });

    items.sort((a, b) => (a.sort > b.sort ? 1 : -1));

    sidebar.push({ title: section, selected, items });
  });

  return sidebar;
};

export const getDocData = (
  sectionName: string,
  docId: string
): DocProps | null => {
  const sections = fs.readdirSync(docsDirectory);
  const section = sections.find((section) => section === sectionName);

  if (section) {
    const docsDir = path.join(docsDirectory, section);
    const docNames = fs.readdirSync(docsDir);

    const id = docNames.find((id) => id.replace(/\.mdx$/, '') === docId);

    if (id) {
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
