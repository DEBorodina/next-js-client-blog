'use client';

import React, { useState } from 'react';

import { useMyTranslation } from '@/app/i18n/client';

import { Modal } from '../Modal';
import Navigation from '../Navigation';
import styles from './styles.module.scss';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useMyTranslation();

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <header className={styles.header}>
      {openModal && (
        <Modal setOpen={setOpenModal}>
          <iframe
            title="video"
            className={styles.header__video}
            src="https://www.youtube.com/embed/tOX9hLmBxho?autoplay=1&mute=1"
          />
        </Modal>
      )}
      <div className={styles.header__container}>
        <span className={styles.header__logo}>Modsen Client Blog</span>
        <div className={styles.header__menu}>
          <div className={styles.header__navigation}>
            <Navigation type="header" />
          </div>
          <button className={styles.header__button} onClick={handleClick}>
            {t('header.video')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
