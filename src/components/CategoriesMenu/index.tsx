import categories from '@data/categories.json';

import { serverTranslation } from '@/app/i18n/client';

import CategoriesMenuItem from '../CategoriesMenuItem';
import styles from './styles.module.scss';
import { CategoriesMenuProps } from './types';

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({
  currentCategory,
  lng,
}) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.menu}>
      <h2 className={styles.menu__title}>{t('categories')}</h2>
      <div className={styles.menu__container}>
        {categories.map((category) => (
          <CategoriesMenuItem
            key={category.name}
            category={category}
            isCurrent={currentCategory === category.name.toLocaleLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
