import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';

import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';
import { BlogHeaderProps } from './types';

const BlogHeader: React.FC<BlogHeaderProps> = ({
  post: { title, description, id, date, authorId, image },
}) => {
  const { name } = authors.find((author) => author.id === authorId)!;

  const parsedDate = new Date(date);
  const formatDate = `${
    monthNames[parsedDate.getMonth()]
  } ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  return (
    <div className={styles.post}>
      <article className={styles.post__container}>
        <section className={styles.post__section}>
          <h5 className={styles.post__subtitle}>Featured Post</h5>
          <h3 className={styles.post__title}>{title}</h3>
          <p className={styles.post__info}>
            By <Link href={`/author/${authorId}`}>{name}</Link> | {formatDate}
          </p>
          <p className={styles.post__description}>{description}</p>
          <Link href={`/post/${id}`} className={styles.post__button}>
            {'Read More >'}
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
