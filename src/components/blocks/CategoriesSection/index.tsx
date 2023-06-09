import React from 'react';

import categories from '@data/categories.json';

import CategoryCard from '@/components/CategoryCard';

import styles from './styles.module.scss';
import { CategoriesSectionProps } from './types';

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  title,
  titleAlign,
}) => (
  <div className={styles.categories}>
    <h3 className={styles.categories__title} style={{ textAlign: titleAlign }}>
      {title}
    </h3>
    <div className={styles.categories__container}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.name} />
      ))}
    </div>
  </div>
);

export default CategoriesSection;
