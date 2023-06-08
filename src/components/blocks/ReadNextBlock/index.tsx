import React from 'react';

import posts from '@data/posts.json';

import { serverTranslation } from '@/app/i18n/client';
import ReadNextCard from '@/components/ReadNextCard';

import styles from './styles.module.scss';
import { ReadNextProps } from './types';

const ReadNextBlock: React.FC<ReadNextProps> = ({ category, postId, lng }) => {
  const { t } = serverTranslation(lng);
  const readNextPosts = posts
    .filter((post) => post.category === category && post.id !== postId)
    .slice(0, 3);

  return (
    <div className={styles.readNext}>
      <h2 className={styles.readNext__title}>{t('read.next')}</h2>
      {readNextPosts.length > 0 ? (
        <div className={styles.readNext__container}>
          {readNextPosts.map((post) => (
            <ReadNextCard post={post} lng={lng} key={post.id} />
          ))}
        </div>
      ) : (
        <p className={styles.readNext__info}>{t('no.suggestions')}</p>
      )}
    </div>
  );
};

export default ReadNextBlock;
