import Link from 'next/link';

import styles from './styles.module.scss';
import { MissionBlockProps } from './types';

const MissionBlock: React.FC<MissionBlockProps> = ({ type }) => (
  <div className={styles.mission}>
    <div className={styles.mission__container}>
      <div className={styles.mission__card}>
        {type === 'about' ? (
          <>
            <h6 className={styles.mission__title}>Our mision</h6>
            <h3 className={styles.mission__name}>
              Creating valuable content for creatives all around the world
            </h3>
            <p className={styles.mission__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </>
        ) : (
          <>
            <h6 className={styles.mission__title}>About us</h6>
            <h3 className={styles.mission__name}>
              We are a community of content writers who share their learnings
            </h3>
            <p className={styles.mission__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/about">{'Read More >'}</Link>
          </>
        )}
      </div>
      <div className={styles.mission__card}>
        <h6 className={styles.mission__title}>Our Vision</h6>
        <h3 className={styles.mission__name}>
          A platform that empowers individuals to improve
        </h3>
        <p className={styles.mission__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
      </div>
    </div>
    <div className={styles.pattern}>
      <div className={styles.pattern__yellow} />
      <div className={styles.pattern__purple} />
    </div>
  </div>
);

export default MissionBlock;
