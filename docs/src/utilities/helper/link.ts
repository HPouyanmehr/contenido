// Types
import type { Url, UrlObject } from 'url';

export const fixHref = (href?: string | URL | Url | UrlObject): string => {
  if (!href) return '';
  let link = '';

  if (typeof href === 'string') {
    link = href;
  } else {
    link = href.toString();
  }

  link = link.replaceAll("'", '');

  return link;
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
