'use client';

import React, { useState } from 'react';

import categories from '@data/categories.json';
import posts from '@data/posts.json';

import { useMyTranslation } from '@/app/i18n/client';
import CategoryHeader from '@/components/CategoryHeader';
import CategorySearch from '@/components/CategorySearch';
import PostsList from '@/components/PostsList';

import styles from './styles.module.scss';
import { CategoryPageProps } from './type';

const CategoryPage: React.FC<CategoryPageProps> = ({
  params: { name, lng },
}) => {
  const { t } = useMyTranslation();

  const currentCategory = categories.find(
    (category) => category.name.toLocaleLowerCase() === name
  )!;

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState(
    posts.filter(
      ({ category }) => category === currentCategory.name.toLocaleLowerCase()
    )
  );

  const handleClick = (tag: string) => () => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setDisplayedPosts(
        displayedPosts.filter(({ tags }) => tags?.includes(tag))
      );
    } else {
      const newTags = selectedTags.filter((selectedTag) => tag !== selectedTag);
      const newPosts = posts.filter(({ category, tags }) => {
        if (category !== currentCategory.name.toLocaleLowerCase()) {
          return false;
        }
        if (!newTags.every((newTag) => tags?.includes(newTag))) {
          return false;
        }
        return true;
      });

      setSelectedTags(newTags);
      setDisplayedPosts(newPosts);
    }
  };

  return (
    <>
      <CategoryHeader category={currentCategory} lng={lng} />
      <div className={styles.category__main}>
        <div className={styles.category__posts}>
          <PostsList posts={displayedPosts} listTitle={t('posts')} lng={lng} />
        </div>
        <CategorySearch
          lng={lng}
          category={name}
          handleClick={handleClick}
          selectedTags={selectedTags}
        />
      </div>
    </>
  );
};

export default CategoryPage;
