import React from 'react';

import categories from '@data/categories.json';

import CategoryCard from '../CategoryCard';
import styles from './styles.module.scss';

const CategoriesSection = () => (
  <div className={styles.categories}>
    <h3 className={styles.categories__title}>All Categories</h3>
    <div className={styles.categories__container}>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.name} />
      ))}
    </div>
  </div>
);

export default CategoriesSection;
