import authors from '@data/authors.json';
import posts from '@data/posts.json';

import AuthorHeader from '@/components/AuthorHeader';
import PostsList from '@/components/PostsList';

import { AuthorPageProps } from './type';

const AuthorPage: React.FC<AuthorPageProps> = ({ params: { id } }) => {
  const { name, image, description, linkedin, twitter, facebook, instagram } =
    authors.find((author) => author.id === +id)!;

  const authorPosts = posts.filter(({ authorId }) => authorId === +id);

  return (
    <>
      <AuthorHeader
        name={name}
        image={image}
        description={description}
        linkedin={linkedin}
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
      />
      <PostsList posts={authorPosts} listTitle="My posts" />
    </>
  );
};

export default AuthorPage;
