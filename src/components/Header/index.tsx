import React from 'react';

import Navigation from '../Navigation';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.header__logo}>Modsen Client Blog</span>
        <div className={styles.header__menu}>
          <div className={styles.header__navigation}>
            <Navigation type="header" />
          </div>
          <button className={styles.header__button}>Video about us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
