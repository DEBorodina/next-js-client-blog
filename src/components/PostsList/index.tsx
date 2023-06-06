'use client';

import React, { useRef, useState } from 'react';

import { serverTranslation } from '@/app/i18n/client';

import PostListItem from '../PostListItem';
import styles from './styles.module.scss';
import { PostsListProps } from './types';

const PER_PAGE = 5;

const PostsList: React.FC<PostsListProps> = ({ posts, listTitle, lng }) => {
  const { t } = serverTranslation(lng);
  const [currentPage, setCurrentPage] = useState(0);
  const pageTopRef = useRef<HTMLInputElement>(null);

  const displayPagination = posts.length > PER_PAGE;
  const displayedPosts = posts.slice(
    currentPage * PER_PAGE,
    (currentPage + 1) * PER_PAGE
  );

  const hasPrevious = currentPage !== 0;
  const hasNext = currentPage !== Math.ceil(posts.length / PER_PAGE) - 1;

  const handlePrevious = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
      pageTopRef?.current?.scrollIntoView();
    }
  };

  const handleNext = () => {
    if (currentPage !== Math.ceil(posts.length / PER_PAGE) - 1) {
      setCurrentPage(currentPage + 1);
      pageTopRef?.current?.scrollIntoView();
    }
  };

  return (
    <div className={styles.posts} ref={pageTopRef}>
      <h2 className={styles.posts__title}>{listTitle}</h2>
      <div className={styles.posts__container}>
        {displayedPosts.length ? (
          displayedPosts.map(({ category, image, id, title, description }) => (
            <PostListItem
              category={category}
              image={image}
              id={id}
              title={title}
              description={description}
              key={id}
            />
          ))
        ) : (
          <p className={styles.posts__info}>{t('no.posts')}</p>
        )}
      </div>
      {displayPagination && (
        <div className={styles.pagination}>
          <button
            className={`${styles.pagination__button} ${
              hasPrevious || styles.pagination__button_disabled
            }`}
            onClick={handlePrevious}
          >
            {t('prev')}
          </button>
          <button
            className={`${styles.pagination__button} ${
              hasNext || styles.pagination__button_disabled
            }`}
            onClick={handleNext}
          >
            {t('next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsList;
