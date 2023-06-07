import Link from 'next/link';

import authors from '@data/authors.json';
import posts from '@data/posts.json';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';
import PublishedData from '@/components/PublishedData';

import styles from './styles.module.scss';

const HomeHeader: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  const { title, description, id, date, authorId, image, category } = posts[0];
  const { name } = authors.find((author) => author.id === authorId)!;

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${image})`,
  };

  return (
    <div className={styles.header} style={backgroundStyle}>
      <article className={styles.header__container}>
        <h3 className={styles.header__subtitle}>
          {t('header.posted.on')}
          <Link href={`/post/${category}`}>{category}</Link>
        </h3>
        <Link className={styles.header__title} href={`/post/${id}`}>
          {title}
        </Link>
        <PublishedData id={authorId} date={date} name={name} lng={lng} />
        <p className={styles.header__description}>{description}</p>
        <Link href={`/post/${id}`} className={styles.header__button}>
          {t('read.more')}
        </Link>
      </article>
    </div>
  );
};

export default HomeHeader;
