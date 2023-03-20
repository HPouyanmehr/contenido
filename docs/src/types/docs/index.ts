export interface DocProps {
  id: string;
  section: string;
  title: string;
  content: string;
}

export interface DocSdiebarItemProps {
  title: string;
  link: string;
  sort: number;
}

export interface DocSidebarProps {
  title: string;
  items: DocSdiebarItemProps[];
}
