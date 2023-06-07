import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';

import styles from './styles.module.scss';
import { MissionBlockProps } from './types';

const MissionBlock: React.FC<MissionBlockProps> = ({ type, lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.mission}>
      <div className={styles.mission__container}>
        <div className={styles.mission__card}>
          {type === 'about' ? (
            <>
              <h6 className={styles.mission__title}>{t('our.mission')}</h6>
              <h3 className={styles.mission__name}>{t('our.mission.title')}</h3>
              <p className={styles.mission__description}>
                {t('our.mission.description')}
              </p>
            </>
          ) : (
            <>
              <h6 className={styles.mission__title}>{t('about.us')}</h6>
              <h3 className={styles.mission__name}>{t('about.us.title')}</h3>
              <p className={styles.mission__description}>
                {t('about.us.description')}
              </p>
              <Link href="/about">{t('read.more')}</Link>
            </>
          )}
        </div>
        <div className={styles.mission__card}>
          <h6 className={styles.mission__title}>{t('our.vision')}</h6>
          <h3 className={styles.mission__name}>{t('our.vision.title')}</h3>
          <p className={styles.mission__description}>
            {t('our.vision.description')}
          </p>
        </div>
      </div>
      <div className={styles.pattern}>
        <div className={styles.pattern__yellow} />
        <div className={styles.pattern__purple} />
      </div>
    </div>
  );
};

export default MissionBlock;
