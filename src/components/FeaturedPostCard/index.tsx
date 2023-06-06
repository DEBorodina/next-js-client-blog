import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';

import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';
import { FeaturedPostCardProps } from './types';

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  post: { date, title, authorId, id },
}) => {
  const { name } = authors.find((author) => author.id === authorId)!;

  const parsedDate = new Date(date);
  const formatDate = `${
    monthNames[parsedDate.getMonth()]
  } ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
  return (
    <div className={styles.post}>
      <p className={styles.post__info}>
        By <Link href={`/author/${authorId}`}>{name}</Link> | {formatDate}
      </p>
      <Link className={styles.post__title} href={`/post/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default FeaturedPostCard;
