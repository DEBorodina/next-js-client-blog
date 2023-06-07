import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';
import { CategoriesMenuItemProps } from './types';

const CategoriesMenuItem: React.FC<CategoriesMenuItemProps> = ({
  category: { name, icon },
  isCurrent,
}) => (
  <Link href={`/category/${name.toLocaleLowerCase()}`} legacyBehavior>
    <div
      className={`${styles.category} ${isCurrent && styles.category_current}`}
    >
      <div className={styles.category__image}>
        <Image src={icon} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <h5 className={styles.category__title}>{name}</h5>
    </div>
  </Link>
);

export default CategoriesMenuItem;
