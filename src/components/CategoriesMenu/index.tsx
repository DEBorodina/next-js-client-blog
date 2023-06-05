import categories from '@data/categories.json';

import CategoriesMenuItem from '../CategoriesMenuItem';
import styles from './styles.module.scss';
import { CategoriesMenuProps } from './types';

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ currentCategory }) => (
  <div className={styles.menu}>
    <h2 className={styles.menu__title}>Categories</h2>
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

export default CategoriesMenu;
