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
