import React from 'react';

import { socialIcons } from '@/constants/icons';

import FooterForm from '../FooterForm';
import Navigation from '../Navigation';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__menu}>
          <span className={styles.footer__logo}>Modsen Client Blog</span>
          <div className={styles.footer__navigation}>
            <Navigation type="footer" />
          </div>
        </div>
        <FooterForm />
        <div className={styles.footer__contacts}>
          <div className={styles.footer__addresses}>
            <p className={styles.footer__address}>Finstreet 118 2561</p>
            <p className={styles.footer__address}>
              Fintown Hello@finsweet.com 020 7993 2905
            </p>
          </div>
          <div className={styles.footer__icons}>{socialIcons}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
