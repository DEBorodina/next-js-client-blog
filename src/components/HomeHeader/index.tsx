import Link from 'next/link';

import authors from '@data/authors.json';
import posts from '@data/posts.json';

import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';

const HomeHeader = () => {
  const { title, description, id, date, authorId, image, category } = posts[0];
  const { name } = authors.find((author) => author.id === authorId)!;

  const parsedDate = new Date(date);
  const formatDate = `${
    monthNames[parsedDate.getMonth()]
  } ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${image})`,
  };

  return (
    <div className={styles.header} style={backgroundStyle}>
      <article className={styles.header__container}>
        <h3 className={styles.header__subtitle}>
          Posted on
          <Link href={`/post/${category}`}>{category}</Link>
        </h3>
        <Link className={styles.header__title} href={`/post/${id}`}>
          {title}
        </Link>
        <p className={styles.header__info}>
          By <Link href={`/author/${authorId}`}>{name}</Link> | {formatDate}
        </p>
        <p className={styles.header__description}>{description}</p>
        <Link href={`/post/${id}`} className={styles.header__button}>
          {'Read More >'}
        </Link>
      </article>
    </div>
  );
};

export default HomeHeader;
