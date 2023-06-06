import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';

import styles from './styles.module.scss';

const AboutHeader: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.top}>
      <div className={styles.top__section}>
        <h2 className={styles.top__title}>{t('nav.about')}</h2>
        <p className={styles.top__description}>{t('our.mission.title')}</p>
      </div>
      <div className={styles.top__text}>{t('our.mission.description')}</div>
    </div>
  );
};

export default AboutHeader;
