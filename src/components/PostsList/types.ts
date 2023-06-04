export interface Post {
  category: string;
  title: string;
  description: string;
  image: string;
  id: number;
}

export interface PostsListProps {
  posts: Post[];
  listTitle?: string;
}
