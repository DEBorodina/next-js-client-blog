import Link from 'next/link';
import React from 'react';

import { formatDate } from '@/utils/dateFormatter';

import styles from './styles.module.scss';
import { PublishedDataProps } from './types';

const PublishedData: React.FC<PublishedDataProps> = ({
  name,
  id,
  lng,
  date,
  color = 'yellow',
}) => {
  const formattedDate = formatDate(lng, date);

  return (
    <p className={`${styles.info} ${color === 'purple' && styles.info_purple}`}>
      <Link href={`/author/${id}`}>{name}</Link> | {formattedDate}
    </p>
  );
};

export default PublishedData;
