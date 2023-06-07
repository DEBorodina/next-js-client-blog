import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';
import { PostListItemProps } from './types';

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  category,
  description,
  image,
  id,
}) => (
  <Link href={`/post/${id}`} legacyBehavior>
    <article className={styles.post}>
      <div className={styles.post__image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <section className={styles.post__section}>
        <span className={styles.post__category}>{category}</span>
        <h4 className={styles.post__title}>{title}</h4>
        <p className={styles.post__description}>{description}</p>
      </section>
    </article>
  </Link>
);

export default PostListItem;
