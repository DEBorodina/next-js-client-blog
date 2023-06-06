import dynamic from 'next/dynamic';

import { serverTranslation } from '@/app/i18n/client';
import { IPage } from '@/app/types';
import ContactUsForm from '@/components/ContactUsForm';

import styles from './styles.module.scss';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

const ContactPage: React.FC<IPage> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.header__subtitle}>{t('nav.contact')}</h2>
          <h1 className={styles.header__title}>{t('start.conversation')}</h1>
          <p className={styles.header__text}>{t('contact.description')}</p>
        </div>
        <div className={styles.timetable}>
          <div className={styles.timetable__container}>
            <div className={styles.timetable__section}>
              <h6 className={styles.timetable__title}>{t('working.hours')}</h6>
              <p className={styles.timetable__data}>{t('working.days.data')}</p>
              <p className={styles.timetable__data}>
                {t('working.hours.data')}
              </p>
              <p className={styles.timetable__extra_data}>{t('our.support')}</p>
            </div>
            <div className={styles.timetable__section}>
              <h6 className={styles.timetable__title}>{t('nav.contact')}</h6>
              <p className={styles.timetable__data}>020 7993 2905</p>
              <p className={styles.timetable__extra_data}>hello@finsweet.com</p>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
      <Map />
    </>
  );
};

export default ContactPage;
