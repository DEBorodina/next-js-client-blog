import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const JoinBlock = () => (
  <div className={styles.join}>
    <h2 className={styles.join__title}>
      Join our team to be a part of our story
    </h2>
    <p className={styles.join__text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </p>
    <Link className={styles.join__button} href="/contact">
      Join Now
    </Link>
  </div>
);

export default JoinBlock;
