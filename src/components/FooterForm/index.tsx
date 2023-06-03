import React from 'react';

import styles from './styles.module.scss';

const FooterForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form__container}>
        <h6 className={styles.form__title}>
          Subscribe to our news letter to get latest updates and news
        </h6>
        <input
          placeholder="Enter Your Email"
          className={styles.form__input}
          type="email"
        />
        <button className={styles.form__button}>Subscribe</button>
      </div>
    </div>
  );
};

export default FooterForm;
