export interface DocProps {
  id: string;
  section: string;
  title: string;
  content: string;
  headings: { [key: string]: string[] };
}

export interface DocSdiebarItemProps {
  title: string;
  link: string;
  sort: number;
}

export interface DocSidebarProps {
  title: string;
  selected: boolean;
  items: DocSdiebarItemProps[];
}
