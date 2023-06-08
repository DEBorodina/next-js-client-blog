import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';
import posts from '@data/posts.json';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';

import PublishedData from '../PublishedData';
import styles from './styles.module.scss';

const HomeFeaturedPost: React.FC<ILanguage> = ({ lng }) => {
  const { title, description, id, date, authorId, image } = posts[1];

  const { name } = authors.find((author) => author.id === authorId)!;

  const { t } = serverTranslation(lng);

  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <PublishedData
        name={name}
        id={authorId}
        date={date}
        lng={lng}
        color="purple"
      />
      <h3 className={styles.post__title}>{title}</h3>
      <p className={styles.post__description}>{description}</p>
      <Link href={`/post/${id}`} className={styles.post__button}>
        {t('read.more')}
      </Link>
    </div>
  );
};

export default HomeFeaturedPost;
