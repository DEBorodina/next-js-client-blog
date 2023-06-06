import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import authors from '@data/authors.json';
import posts from '@data/posts.json';

import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';

const HomeFeaturedPost = () => {
  const { title, description, id, date, authorId, image } = posts[1];

  const { name } = authors.find((author) => author.id === authorId)!;

  const parsedDate = new Date(date);
  const formatDate = `${
    monthNames[parsedDate.getMonth()]
  } ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className={styles.post__info}>
        By <Link href={`/author/${authorId}`}>{name}</Link> | {formatDate}
      </p>
      <h3 className={styles.post__title}>{title}</h3>
      <p className={styles.post__description}>{description}</p>
      <Link href={`/post/${id}`} className={styles.post__button}>
        {'Read More >'}
      </Link>
    </div>
  );
};

export default HomeFeaturedPost;