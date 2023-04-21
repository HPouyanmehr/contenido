export interface BlogPostProps {
  id: string;
  title: string;
  description: string;
  body: string;
  tags: string;
  cover: string;
  type: string;
  date: string;
  update: string;
  readTime: number;
}

export interface BlogPostCardProps extends Omit<BlogPostProps, 'body'> {}
