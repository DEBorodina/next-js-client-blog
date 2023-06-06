import Link from 'next/link';

import styles from './styles.module.scss';

const HomeHistoryBlock = () => (
  <div className={styles.history}>
    <div className={styles.history__image} />
    <article className={styles.history__article}>
      <h3 className={styles.history__subtitle}>Why we started </h3>
      <h2 className={styles.history__title}>
        It started out as a simple idea and evolved into our passion
      </h2>
      <p className={styles.history__description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <Link className={styles.history__button} href="/about">
        {'Discover our story >'}
      </Link>
    </article>
  </div>
);

export default HomeHistoryBlock;
