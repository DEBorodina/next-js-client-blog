import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';
import categories from '@data/categories.json';

import { serverTranslation } from '@/app/i18n/client';
import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';
import { PostProps } from './types';

const Post: React.FC<PostProps> = ({
  post: { image, title, text, date, authorId, category },
  lng,
}) => {
  const { t } = serverTranslation(lng);

  const author = authors.find(({ id }) => id === authorId)!;
  const { icon: categoryIcon, name: categoryName } = categories.find(
    ({ name }) => name.toLocaleLowerCase() === category
  )!;

  const parsedDate = new Date(date);
  const formatDate = `${t(
    monthNames[parsedDate.getMonth()]
  )} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.author}>
            <div className={styles.image}>
              <Image
                src={author.image}
                alt={`${author.name} photo`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.author__data}>
              <Link
                className={styles.author__name}
                href={`/author/${authorId}`}
              >
                {author.name}
              </Link>
              <span className={styles.author__date}>{formatDate}</span>
            </div>
          </div>
          <h1 className={styles.header__title}>{title}</h1>
          <div className={styles.category}>
            <div className={styles.category__image}>
              <Image
                src={categoryIcon}
                alt={`${category} image`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <Link
              className={styles.category__name}
              href={`/category/${category}`}
            >
              {categoryName}
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.post__image}>
        <Image
          src={image}
          alt="post image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div
        className={styles.post__content}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </>
  );
};

export default Post;
