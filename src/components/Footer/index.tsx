'use client';

import React from 'react';

import { ILanguage } from '@/app/types';
import { socialIcons } from '@/constants/socialLinks';

import FooterForm from '../FooterForm';
import LanguageSwitcher from '../LanguageSwitcher';
import Navigation from '../Navigation';
import styles from './styles.module.scss';

const Footer: React.FC<ILanguage> = ({ lng }) => (
  <footer className={styles.footer} id="footer">
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
          {/* @ts-expect-error Server Component */}
          <LanguageSwitcher lng={lng} />
        </div>
        <div className={styles.footer__icons}>
          {socialIcons.map(({ icon, href }) => (
            <a href={href} key={href}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
