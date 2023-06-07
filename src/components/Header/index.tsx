'use client';

import React, { useEffect, useRef, useState } from 'react';

import { usePopup } from '@/hooks';

import HeaderMenu from '../HeaderMenu';
import SideMenu from '../SideMenu';
import styles from './styles.module.scss';

const Header = () => {
  const [ref, isOpen, setIsOpen] = usePopup();

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.header__logo}>Modsen Client Blog</span>
        <div className={styles.header__menu}>
          <HeaderMenu />
        </div>
        <button className={styles.burger} onClick={handleClick} />
        {isOpen && <SideMenu ref={ref} setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Header;
