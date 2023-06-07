import React from 'react';

import { serverTranslation } from '@/app/i18n/client';

import styles from './styles.module.scss';
import { CategoryHeaderProps } from './types';

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  category: { name, description },
  lng,
}) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>{name}</h1>
      <p className={styles.header__description}>{description}</p>
      <p className={styles.header__route}>{`${t('nav.blog')} > ${name}`}</p>
    </div>
  );
};

export default CategoryHeader;
