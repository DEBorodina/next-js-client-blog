import posts from '@data/posts.json';

import JoinBlock from '@/components/JoinBlock';
import Post from '@/components/Post';
import ReadNextBlock from '@/components/ReadNextBlock';

import { PostPageProps } from './types';

const PostPage: React.FC<PostPageProps> = ({ params: { id, lng } }) => {
  const currentPost = posts.find((post) => post.id === +id)!;

  return (
    <>
      <Post post={currentPost} lng={lng} />
      <ReadNextBlock
        category={currentPost.category}
        postId={currentPost.id}
        lng={lng}
      />
      <JoinBlock lng={lng} />
    </>
  );
};

export default PostPage;
