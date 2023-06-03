import authors from '@data/authors.json';

import AuthorCard from '@/components/AuthorCard';

import styles from './styles.module.scss';

const AuthorList = () => (
  <div className={styles.authors}>
    <h2 className={styles.authors__title}>List of Authors</h2>
    <div className={styles.authors__list}>
      {authors.map((author) => (
        <AuthorCard {...author} />
      ))}
    </div>
  </div>
);

export default AuthorList;
