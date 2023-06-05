import React from 'react';

import styles from './styles.module.scss';
import { CategoryHeaderProps } from './types';

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  category: { name, description },
}) => (
  <div className={styles.header}>
    <h1 className={styles.header__title}>{name}</h1>
    <p className={styles.header__description}>{description}</p>
    <p className={styles.header__route}>{`blog > ${name}`}</p>
  </div>
);

export default CategoryHeader;
