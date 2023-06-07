import { ILanguage } from '@/app/types';

export interface Post {
  category: string;
  title: string;
  description: string;
  image: string;
  id: number;
}

export interface PostsListProps extends ILanguage {
  posts: Post[];
  listTitle?: string;
}
