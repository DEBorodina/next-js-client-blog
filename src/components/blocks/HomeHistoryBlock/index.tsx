import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';

import styles from './styles.module.scss';

const HomeHistoryBlock: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.history}>
      <div className={styles.history__image} />
      <article className={styles.history__article}>
        <h3 className={styles.history__subtitle}>{t('why.we.started')}</h3>
        <h2 className={styles.history__title}>{t('why.we.started.title')}</h2>
        <p className={styles.history__description}>
          {t('why.we.started.description')}
        </p>
        <Link className={styles.history__button} href="/about">
          {t('discover.our.story')}
        </Link>
      </article>
    </div>
  );
};

export default HomeHistoryBlock;
