import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';
import PublishedData from '@/components/PublishedData';
import { usePostWithAuthor } from '@/hooks/usePostWithAuthor';

import styles from './styles.module.scss';

const BlogHeader: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  const { title, name, date, id, description, image, authorId } =
    usePostWithAuthor(0);

  return (
    <div className={styles.post}>
      <article className={styles.post__container}>
        <section className={styles.post__section}>
          <h5 className={styles.post__subtitle}>{t('featured.post')}</h5>
          <h3 className={styles.post__title}>{title}</h3>
          <PublishedData
            name={name}
            id={authorId}
            date={date}
            lng={lng}
            color="purple"
          />
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
