import Image from 'next/image';

import AuthorList from '@/components/AuthorsList';
import JoinBlock from '@/components/JoinBlock';
import MissionBlock from '@/components/MissionnBlock';

import styles from './styles.module.scss';

const AboutPage = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.top__section}>
        <h2 className={styles.top__title}>ABOUT US</h2>
        <p className={styles.top__description}>
          We are a team of content writers who share their learnings
        </p>
      </div>
      <div className={styles.top__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
    <div className={styles.statistics}>
      <div className={styles.statistics__display}>
        <div className={styles.statistics__card}>
          <h2 className={styles.statistics__number}>12+</h2>
          <p className={styles.statistics__description}>Blogs Published</p>
        </div>
        <div className={styles.statistics__card}>
          <h2 className={styles.statistics__number}>18K+</h2>
          <p className={styles.statistics__description}>Views on Finsweet</p>
        </div>
        <div className={styles.statistics__card}>
          <h2 className={styles.statistics__number}>30K+</h2>
          <p className={styles.statistics__description}>Total active Users</p>
        </div>
      </div>
    </div>
    <MissionBlock type="about" />
    <section className={styles.info}>
      <article className={styles.info__content}>
        <h2 className={styles.info__title}>Our team of creatives</h2>
        <h5 className={styles.info__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h5>
        <p className={styles.info__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </article>
      <div className={styles.info__image}>
        <Image
          src="/images/our-team.png"
          alt="our team"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
    <section className={styles.info}>
      <div className={styles.info__image}>
        <Image
          src="/images/three-persons.png"
          alt="our team"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <article className={styles.info__content}>
        <h2 className={styles.info__title}>Why we started this Blog</h2>
        <h5 className={styles.info__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h5>
        <p className={styles.info__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </article>
    </section>
    <AuthorList />
    <JoinBlock />
  </div>
);

export default AboutPage;
