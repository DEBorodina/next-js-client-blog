'use client';

/* eslint-disable simple-import-sort/imports */
import React, { useState } from 'react';

import categories from '@data/categories.json';

import { useMyTranslation } from '@/app/i18n/client';
import CategorySearch from '@/components/CategorySearch';
import CategoryHeader from '@/components/blocks/CategoryHeader';
import PostsList from '@/components/blocks/PostsList';
import { TagsHelper } from '@/utils/TagsHelper';

import styles from './styles.module.scss';
import { CategoryPageProps } from './type';

/* eslint-disable simple-import-sort/imports */

const CategoryPage: React.FC<CategoryPageProps> = ({
  params: { name, lng },
}) => {
  const { t } = useMyTranslation();

  const currentCategory = categories.find(
    (category) => category.name.toLocaleLowerCase() === name
  )!;

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState(
    TagsHelper.filterPostsWithTagsAndCategory([], currentCategory.name)
  );

  const handleClickTag = (tag: string) => () => {
    const { newTags, newPosts } = TagsHelper.handleTagClicked(
      selectedTags,
      displayedPosts,
      tag,
      currentCategory.name
    );

    setSelectedTags(newTags);
    setDisplayedPosts(newPosts);
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
          handleClick={handleClickTag}
          selectedTags={selectedTags}
        />
      </div>
    </>
  );
};

export default CategoryPage;
