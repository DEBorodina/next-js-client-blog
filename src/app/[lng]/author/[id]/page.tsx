import authors from '@data/authors.json';
import posts from '@data/posts.json';

import { serverTranslation } from '@/app/i18n/client';
import AuthorHeader from '@/components/blocks/AuthorHeader';
import PostsList from '@/components/blocks/PostsList';

import { AuthorPageProps } from './type';

const AuthorPage: React.FC<AuthorPageProps> = ({ params: { id, lng } }) => {
  const { name, image, description, linkedin, twitter, facebook, instagram } =
    authors.find((author) => author.id === +id)!;

  const authorPosts = posts.filter(({ authorId }) => authorId === +id);

  const { t } = serverTranslation(lng);

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
        lng={lng}
      />
      <PostsList posts={authorPosts} listTitle={t('my.posts')} lng={lng} />
    </>
  );
};

export default AuthorPage;
