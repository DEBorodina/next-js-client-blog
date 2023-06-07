import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';

import PublishedData from '../PublishedData';
import styles from './styles.module.scss';
import { FeaturedPostCardProps } from './types';

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  post: { date, title, authorId, id },
  lng,
}) => {
  const { name } = authors.find((author) => author.id === authorId)!;

  return (
    <div className={styles.post}>
      <PublishedData
        name={name}
        id={authorId}
        date={date}
        lng={lng}
        color="purple"
      />
      <Link className={styles.post__title} href={`/post/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
