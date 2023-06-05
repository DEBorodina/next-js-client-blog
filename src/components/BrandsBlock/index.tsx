import { partners } from '@/constants/partners';

import styles from './styles.module.scss';

const BrandsBlock = () => (
  <div className={styles.block}>
    <div className={styles.block__info}>
      <p className={styles.block__subtitle}>We are</p>
      <p className={styles.block__title}>Featured in</p>
    </div>
    {partners.map(({ icon, name }) => (
      <div key={name}>{icon}</div>
    ))}
  </div>
);

export default BrandsBlock;
