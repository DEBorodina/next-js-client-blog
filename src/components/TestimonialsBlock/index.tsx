import { serverTranslation } from '@/app/i18n/client';
import { ILanguage } from '@/app/types';

import TestimonialsCarousel from '../TestimonialsCarousel';
import styles from './styles.module.scss';

const TestimonialsBlock: React.FC<ILanguage> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.block}>
      <div className={styles.block__container}>
        <div className={styles.block__article}>
          <h3 className={styles.block__subtitle}>{t('testimonials')}</h3>
          <h2 className={styles.block__title}>{t('what.people.say')}</h2>
          <p className={styles.block__description}>
            {t('testimonials.description')}
          </p>
        </div>
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default TestimonialsBlock;
