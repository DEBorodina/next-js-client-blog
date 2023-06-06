import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';
import posts from '@data/posts.json';

import { serverTranslation } from '@/app/i18n/client';
import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';

const BlogHeader = ({ lng }) => {
  const { t } = serverTranslation(lng);
  const { title, description, id, date, authorId, image } = posts[0];
  const { name } = authors.find((author) => author.id === authorId)!;

  const parsedDate = new Date(date);
  const formatDate = `${t(
    monthNames[parsedDate.getMonth()]
  )} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  return (
    <div className={styles.post}>
      <article className={styles.post__container}>
        <section className={styles.post__section}>
          <h5 className={styles.post__subtitle}>{t('featured.post')}</h5>
          <h3 className={styles.post__title}>{title}</h3>
          <p className={styles.post__info}>
            <Link href={`/author/${authorId}`}>{name}</Link> | {formatDate}
          </p>
          <p className={styles.post__description}>{description}</p>
          <Link href={`/post/${id}`} className={styles.post__button}>
            {t('read.more')}
          </Link>
        </section>
        <div className={styles.post__image}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
      </article>
    </div>
  );
};

export default BlogHeader;
