import Image from 'next/image';

import { icons } from '@/constants/icons';

import styles from './styles.module.scss';
import { AuthorHeaderProps } from './types';

const AuthorHeader: React.FC<AuthorHeaderProps> = ({
  name,
  image,
  description,
  twitter,
  linkedin,
  instagram,
  facebook,
}) => {
  const text = `Hey there, I’m ${name} and welcome to my Blog`;

  return (
    <div className={styles.header}>
      <section className={styles.header__container}>
        <div className={styles.header__image}>
          <Image
            src={image}
            alt={`${name} photo`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <article className={styles.header__article}>
          <h2 className={styles.header__title}>{text}</h2>
          <p className={styles.header__text}>{description}</p>
          <div className={styles.header__socials}>
            <a href={facebook}>{icons.facebook}</a>
            <a href={twitter}>{icons.twitter}</a>
            <a href={instagram}>{icons.instagram}</a>
            <a href={linkedin}>{icons.linkedin}</a>
          </div>
        </article>
        <div className={styles.pattern}>
          <div className={styles.pattern__yellow} />
          <div className={styles.pattern__purple} />
        </div>
      </section>
    </div>
  );
};

export default AuthorHeader;
