import Image from 'next/image';

import styles from './styles.module.scss';
import { AboutInfoCardProps } from './types';

const AboutInfoCard: React.FC<AboutInfoCardProps> = ({
  type,
  title,
  subtitle,
  description,
  image,
  alt,
}) => (
  <section
    className={styles.info}
    style={{ flexDirection: type === 'right' ? 'row-reverse' : 'row' }}
  >
    <div className={styles.info__image}>
      <Image src={image} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>

    <article className={styles.info__content}>
      <h2 className={styles.info__title}>{title}</h2>
      <h5 className={styles.info__subtitle}>{subtitle}</h5>
      <p className={styles.info__text}>{description}</p>
    </article>
  </section>
);

export default AboutInfoCard;
