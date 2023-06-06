import { Fragment } from 'react';

import data from '@data/privacy-policy.json';

import { serverTranslation } from '@/app/i18n/client';
import { IPage } from '@/app/types';

import styles from './styles.module.scss';

const PrivacyPolicyPage: React.FC<IPage> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.policy}>
      <div className={styles.policy__header}>
        <h1 className={styles.policy__title}>{t('nav.privacy.policy')}</h1>
        <p className={styles.policy__update}>{t('last.update')}</p>
      </div>
      <div className={styles.policy__content}>
        <article className={styles.policy__article}>
          {data.map(({ text, title }) => (
            <Fragment key={title}>
              <h6 className={styles.policy__article_title}>{title}</h6>
              <p className={styles.policy__article_text}>{text}</p>
            </Fragment>
          ))}
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
