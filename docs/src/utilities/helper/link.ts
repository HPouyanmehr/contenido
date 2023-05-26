// Types
import { DocProps, DocSidebarProps } from 'types/docs';
import type { Url, UrlObject } from 'url';

export const fixHref = (href?: string | URL | Url | UrlObject): string => {
  if (!href) return '';
  let link = '';

  if (typeof href === 'string') {
    link = href.replaceAll('[object Object],', '').replaceAll(' ', '');
  } else {
    link = href.toString();
  }

  link = link.replaceAll("'", '').trim().replaceAll(' ', '_');

  return link.toLocaleLowerCase();
};

export const isExternal = (href?: string | URL | Url | UrlObject): boolean => {
  if (!href) return false;
  let link = fixHref(href);

  return link.toString().startsWith('https://') ||
    link.toString().startsWith('http://') ||
    link.toString().startsWith('www.')
    ? true
    : false;
};

export const getPurePath = (href?: string): string => {
  if (!href) return '';

  if (href.includes('#')) return href.slice(0, href.indexOf('#'));

  return href;
};

export const getNextSidebarLink = (
  sidebar: DocSidebarProps[],
  currentValue?: DocProps
): { link: string; title: string } => {
  if (sidebar.length > 0 && currentValue) {
    const sectionIndex = sidebar.findIndex(
      (section) => section.title === currentValue.section
    );

    if (sectionIndex > -1) {
      const section = sidebar[sectionIndex];
      const itemIndex = section.items.findIndex(
        (item) => item.link === currentValue.id
      );

      if (itemIndex > -1) {
        if (itemIndex + 1 < section.items.length) {
          const nextItem = section.items[itemIndex + 1];
          return {
            link: `/${section.title}/${nextItem.link}`,
            title: nextItem.title,
          };
        } else if (sectionIndex + 1 < sidebar.length) {
          const nextSection = sidebar[sectionIndex + 1];

          if (nextSection.items.length > 0) {
            return {
              link: `/${nextSection.title}/${nextSection.items[0].link}`,
              title: nextSection.items[0].title,
            };
          }
        }
      }
    }
  }

  return { link: '', title: '' };
};

export const getPrevSidebarLink = (
  sidebar: DocSidebarProps[],
  currentValue?: DocProps
): { link: string; title: string } => {
  if (sidebar.length > 0 && currentValue) {
    const sectionIndex = sidebar.findIndex(
      (section) => section.title === currentValue.section
    );

    if (sectionIndex > -1) {
      const section = sidebar[sectionIndex];
      const itemIndex = section.items.findIndex(
        (item) => item.link === currentValue.id
      );

      if (itemIndex > -1) {
        if (itemIndex !== 0) {
          const prevItem = section.items[itemIndex - 1];
          return {
            link: `/${section.title}/${prevItem.link}`,
            title: prevItem.title,
          };
        } else if (sectionIndex !== 0) {
          const prevSection = sidebar[sectionIndex - 1];

          if (prevSection.items.length > 0) {
            const lastItemIndex = prevSection.items.length - 1;
            return {
              link: `/${prevSection.title}/${prevSection.items[lastItemIndex].link}`,
              title: prevSection.items[lastItemIndex].title,
            };
          }
        }
      }
    }
  }

  return { link: '', title: '' };
};
