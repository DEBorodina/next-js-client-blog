import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';
import { CategoryCardProps } from './types';

const CategoryCard: React.FC<CategoryCardProps> = ({
  category: { name, icon, description },
}) => (
  <Link href={`/category/${name.toLocaleLowerCase()}`} legacyBehavior>
    <div className={styles.category}>
      <div className={styles.category__image}>
        <Image src={icon} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <h5 className={styles.category__title}>{name}</h5>
      <p className={styles.category__description}>{description}</p>
    </div>
  </Link>
);

export default CategoryCard;
