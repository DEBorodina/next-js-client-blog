import authors from '@data/authors.json';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';
import AuthorCard from '@/components/AuthorCard';

import styles from './styles.module.scss';

const AuthorList: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.authors}>
      <h2 className={styles.authors__title}>{t('authors.list')}</h2>
      <div className={styles.authors__list}>
        {authors.map((author) => (
          <AuthorCard {...author} key={author.id} />
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
