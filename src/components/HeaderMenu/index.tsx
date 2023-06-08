'use client';

import React, { useState } from 'react';

import { useMyTranslation } from '@/app/i18n/client';

import { Modal } from '../Modal';
import Navigation from '../Navigation';
import { SideMenuProps } from '../SideMenu/types';
import styles from './styles.module.scss';

const HeaderMenu: React.FC<Partial<SideMenuProps>> = ({ setIsOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useMyTranslation();

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {openModal && (
        <Modal setOpen={setOpenModal}>
          <iframe
            aria-label="video"
            title="video"
            className={styles.menu__video}
            src="https://www.youtube.com/embed/tOX9hLmBxho?autoplay=1&mute=1"
          />
        </Modal>
      )}
      <div className={styles.menu}>
        <div className={styles.menu__navigation} onClick={handleClose}>
          <Navigation type="header" />
        </div>
        <button className={styles.menu__button} onClick={handleClick}>
          {t('header.video')}
        </button>
      </div>
    </>
  );
};

export default HeaderMenu;
