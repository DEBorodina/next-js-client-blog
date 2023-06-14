import authors from '@data/authors.json';
import posts from '@data/posts.json';

export const usePostWithAuthor = (postId: number) => {
  const { title, description, id, date, image, authorId, category } =
    posts[postId];
  const { name } = authors.find((author) => author.id === authorId)!;
  return {
    title,
    description,
    id,
    date,
    image,
    name,
    authorId,
    category,
  };
};
