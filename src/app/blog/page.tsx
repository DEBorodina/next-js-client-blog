import React from 'react';

import posts from '@data/posts.json';

import BlogHeader from '@/components/BlogHeader';
import CategoriesSection from '@/components/CategoriesSection';
import JoinBlock from '@/components/JoinBlock';
import PostsList from '@/components/PostsList';

import styles from './styles.module.scss';

const BlogPage = () => {
  const featuredPost = posts[0];
  return (
    <div className={styles.blog}>
      <BlogHeader post={featuredPost} />
      <PostsList posts={posts} listTitle="All posts" />
      <CategoriesSection />
      <JoinBlock />
    </div>
  );
};

export default BlogPage;
