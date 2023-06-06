import Link from 'next/link';
import React from 'react';

import posts from '@data/posts.json';

import FeaturedPostCard from '../FeaturedPostCard';
import HomeFeaturedPost from '../HomeFeaturedPost';
import styles from './styles.module.scss';

const FeaturedPostsBlock = () => {
  const featuredPosts = posts.slice(2, 6);
  return (
    <div className={styles.block}>
      <div className={styles.block__section}>
        <h3 className={styles.block__title}>Featured Post</h3>
        <HomeFeaturedPost />
      </div>
      <div className={styles.block__section}>
        <div className={styles.block__top}>
          <h3 className={styles.block__title}>All Posts</h3>
          <Link href="blog">View all</Link>
        </div>
        <div className={styles.block__posts}>
          {featuredPosts.map((post) => (
            <FeaturedPostCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostsBlock;
