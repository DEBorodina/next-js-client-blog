'use client';

import React, { useState } from 'react';

import allTags from '@data/tags.json';

import CategoriesMenu from '../CategoriesMenu';
import SearchInput from '../SearchInput';
import styles from './styles.module.scss';
import { CategorySearchProps } from './types';

const CategorySearch: React.FC<CategorySearchProps> = ({
  category,
  handleClick,
  selectedTags,
}) => (
  <div className={styles.menu}>
    <SearchInput addTag={handleClick} />
    <CategoriesMenu currentCategory={category} />
    <h3 className={styles.menu__title}>All tags</h3>
    <div className={styles.tag__container}>
      {allTags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <span
            className={`${styles.tag} ${isSelected && styles.tag_selected}`}
            key={tag}
            onClick={handleClick(tag)}
          >
            {tag}
          </span>
        );
      })}
    </div>
  </div>
);

export default CategorySearch;
