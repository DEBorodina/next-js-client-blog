import { serverTranslation } from '@/app/i18n/client';
import { IPage } from '@/app/types';
import AboutHeader from '@/components/AboutHeader';
import AboutInfoCard from '@/components/AboutInfoCard';
import AboutStatistics from '@/components/AboutStatics';
import AuthorList from '@/components/AuthorsList';
import JoinBlock from '@/components/JoinBlock';
import MissionBlock from '@/components/MissionBlock';

import styles from './styles.module.scss';

const AboutPage: React.FC<IPage> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.container}>
      <AboutHeader lng={lng} />
      <AboutStatistics lng={lng} />
      <MissionBlock type="about" lng={lng} />
      <AboutInfoCard
        title={t('our.team')}
        subtitle={t('our.team.subtitle')}
        description={t('our.team.description')}
        alt={t('our.team.alt')}
        image="/images/our-team.png"
        type="right"
      />
      <AboutInfoCard
        title={t('why.we.started.blog')}
        subtitle={t('why.we.started.blog.subtitle')}
        description={t('why.we.started.blog.description')}
        alt={t('our.team.alt')}
        image="/images/three-persons.png"
        type="left"
      />
      <AuthorList lng={lng} />
      <JoinBlock lng={lng} />
    </div>
  );
};

export default AboutPage;
