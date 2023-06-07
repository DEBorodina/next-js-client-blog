import React from 'react';

import posts from '@data/posts.json';

import { serverTranslation } from '@/app/i18n/client';
import { IPage } from '@/app/types';
import BlogHeader from '@/components/blocks/BlogHeader';
import CategoriesSection from '@/components/blocks/CategoriesSection';
import JoinBlock from '@/components/blocks/JoinBlock';
import PostsList from '@/components/blocks/PostsList';

import styles from './styles.module.scss';

const BlogPage: React.FC<IPage> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.blog}>
      <BlogHeader lng={lng} />
      <PostsList posts={posts} listTitle={t('all.posts')} lng={lng} />
      <CategoriesSection title={t('all.categories')} titleAlign="left" />
      <JoinBlock lng={lng} />
    </div>
  );
};

export default BlogPage;
