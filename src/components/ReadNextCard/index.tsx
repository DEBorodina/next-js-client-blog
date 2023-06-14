import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { usePostWithAuthor } from '@/hooks/usePostWithAuthor';

import PublishedData from '../PublishedData';
import styles from './styles.module.scss';
import { ReadNextCardProps } from './types';

const ReadNextCard: React.FC<ReadNextCardProps> = ({
  post: { title, authorId, description, image, date, id },
  lng,
}) => {
  const { name } = usePostWithAuthor(1);

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <PublishedData
        name={name}
        id={authorId}
        date={date}
        lng={lng}
        color="purple"
      />
      <Link href={`/post/${id}`} className={styles.card__title}>
        {title}
      </Link>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
};

export default ReadNextCard;
