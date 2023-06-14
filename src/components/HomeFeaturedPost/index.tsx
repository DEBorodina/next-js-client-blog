import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';
import { usePostWithAuthor } from '@/hooks/usePostWithAuthor';

import PublishedData from '../PublishedData';
import styles from './styles.module.scss';

const HomeFeaturedPost: React.FC<ILanguage> = ({ lng }) => {
  const { title, name, date, id, description, image, authorId } =
    usePostWithAuthor(1);

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
      <Link
        href={`/post/${id}`}
        className={styles.post__button}
        data-cy="featured-post-link"
      >
        {t('read.more')}
      </Link>
    </div>
  );
};

export default HomeFeaturedPost;
