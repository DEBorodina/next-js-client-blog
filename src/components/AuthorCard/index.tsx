import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/constants/icons';

import styles from './styles.module.scss';
import { AuthorCardProps } from './types';

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  image,
  position,
  company,
  linkedin,
  instagram,
  twitter,
  facebook,
  id,
}) => (
  <div className={styles.author}>
    <div className={styles.author__image}>
      <Image
        src={image}
        alt={`${name} photo`}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <Link href={`/author/${id}`} className={styles.author__name}>
      {name}
    </Link>
    <span className={styles.author__work}>{`${position} ${company}`}</span>
    <div className={styles.author__socials}>
      <a href={facebook}>{icons.facebook}</a>
      <a href={twitter}>{icons.twitter}</a>
      <a href={instagram}>{icons.instagram}</a>
      <a href={linkedin}>{icons.linkedin}</a>
    </div>
  </div>
);

export default AuthorCard;
