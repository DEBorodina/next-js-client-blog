import postsData from '@data/posts.json';

import { Post } from '@/app/types';

export class TagsHelper {
  public static filterPostsWithTag = (posts: Post[], tag: string) => {
    const newPosts = posts.filter(({ tags }) => tags?.includes(tag));
    return newPosts;
  };

  public static filterPostsWithTagsAndCategory = (
    tags: string[],
    category: string
  ) => {
    const newPosts = postsData.filter((post) => {
      if (post.category !== category.toLocaleLowerCase()) {
        return false;
      }
      if (!tags.every((tag) => post.tags.includes(tag))) {
        return false;
      }
      return true;
    });

    return newPosts;
  };

  public static addNewTag = (posts: Post[], newTag: string, tags: string[]) => {
    const newTags = [...tags, newTag];

    const newPosts = TagsHelper.filterPostsWithTag(posts, newTag);
    return { newTags, newPosts };
  };

  public static removeTag = (
    posts: Post[],
    tagToRemove: string,
    tags: string[],
    category: string
  ) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);

    const newPosts = TagsHelper.filterPostsWithTagsAndCategory(
      newTags,
      category
    );
    return { newTags, newPosts };
  };

  public static handleTagClicked = (
    tags: string[],
    posts: Post[],
    tag: string,
    category: string
  ) => {
    if (!tags.includes(tag)) {
      return TagsHelper.addNewTag(posts, tag, tags);
    }
    return TagsHelper.removeTag(posts, tag, tags, category);
  };
}
