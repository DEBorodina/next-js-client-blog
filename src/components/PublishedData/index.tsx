import Link from 'next/link';
import React from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { monthNames } from '@/constants/monthNames';

import styles from './styles.module.scss';
import { PublishedDataProps } from './types';

const PublishedData: React.FC<PublishedDataProps> = ({
  name,
  id,
  lng,
  date,
  color = 'yellow',
}) => {
  const { t } = serverTranslation(lng);

  const parsedDate = new Date(date);
  const formatDate = `${t(
    monthNames[parsedDate.getMonth()]
  )} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;

  return (
    <p className={`${styles.info} ${color === 'purple' && styles.info_purple}`}>
      <Link href={`/author/${id}`}>{name}</Link> | {formatDate}
    </p>
  );
};

export default PublishedData;
