import allTags from '@data/tags.json';

import { serverTranslation } from '@/app/i18n/client';

import CategoriesMenu from '../CategoriesMenu';
import SearchInput from '../SearchInput';
import styles from './styles.module.scss';
import { CategorySearchProps } from './types';

const CategorySearch: React.FC<CategorySearchProps> = ({
  category,
  handleClick,
  selectedTags,
  lng,
}) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.menu}>
      <SearchInput addTag={handleClick} />
      <CategoriesMenu currentCategory={category} lng={lng} />
      <h3 className={styles.menu__title}>{t('all.tags')}</h3>
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
};

export default CategorySearch;
