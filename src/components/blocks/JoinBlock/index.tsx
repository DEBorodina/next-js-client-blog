import Link from 'next/link';
import React from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';

import styles from './styles.module.scss';

const JoinBlock: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.join}>
      <h2 className={styles.join__title}>{t('join')}</h2>
      <p className={styles.join__text}>{t('join.description')}</p>
      <Link className={styles.join__button} href="/contact">
        {t('join.now')}
      </Link>
    </div>
  );
};

export default JoinBlock;
