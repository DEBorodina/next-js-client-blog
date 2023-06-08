import React from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';

import styles from './styles.module.scss';

const AboutStatistics: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.statistics}>
      <div className={styles.statistics__display}>
        <div className={styles.statistics__card}>
          <h2 className={styles.statistics__number}>12+</h2>
          <p className={styles.statistics__description}>
            {t('blogs.published')}
          </p>
        </div>
        <div className={styles.statistics__card}>
          <h2 className={styles.statistics__number}>18K+</h2>
          <p className={styles.statistics__description}>
            {t('views.on.finsweet')}
          </p>
        </div>
        <div className={styles.statistics__card}>
          <h2 className={styles.statistics__number}>30K+</h2>
          <p className={styles.statistics__description}> {t('total.users')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStatistics;
