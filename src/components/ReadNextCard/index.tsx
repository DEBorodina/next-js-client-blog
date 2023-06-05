import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';

import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';
import { ReadNextCardProps } from './types';

const ReadNextCard: React.FC<ReadNextCardProps> = ({
  post: { title, authorId, description, image, date, id },
}) => {
  const { name } = authors.find((author) => author.id === authorId)!;

  const parsedDate = new Date(date);
  const formatDate = `${
    monthNames[parsedDate.getMonth()]
  } ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className={styles.card__info}>
        By <Link href={`/author/${authorId}`}>{name}</Link> | {formatDate}
      </p>
      <Link href={`/post/${id}`} className={styles.card__title}>
        {title}
      </Link>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
};

export default ReadNextCard;
