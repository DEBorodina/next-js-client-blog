import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';
import { partners } from '@/constants/partners';

import styles from './styles.module.scss';

const BrandsBlock: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.block}>
      <div className={styles.block__info}>
        <p className={styles.block__subtitle}>{t('we.are')}</p>
        <p className={styles.block__title}>{t('featured.in')}</p>
      </div>
      {partners.map(({ icon, name }) => (
        <div key={name}>{icon}</div>
      ))}
    </div>
  );
};

export default BrandsBlock;
