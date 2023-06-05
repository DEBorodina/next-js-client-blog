import React from 'react';

import posts from '@data/posts.json';

import ReadNextCard from '../ReadNextCard';
import styles from './styles.module.scss';
import { ReadNextProps } from './types';

const ReadNextBlock: React.FC<ReadNextProps> = ({ category, postId }) => {
  const readNextPosts = posts
    .filter((post) => post.category === category && post.id !== postId)
    .slice(0, 3);

  return (
    <div className={styles.readNext}>
      <h2 className={styles.readNext__title}>What to read next</h2>
      {readNextPosts.length > 0 ? (
        <div className={styles.readNext__container}>
          {readNextPosts.map((post) => (
            <ReadNextCard post={post} />
          ))}
        </div>
      ) : (
        <p className={styles.readNext__info}>No suggestions yet</p>
      )}
    </div>
  );
};

export default ReadNextBlock;
