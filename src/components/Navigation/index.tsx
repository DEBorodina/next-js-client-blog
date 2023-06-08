'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { footerNavigation, headerNavigation } from '@/constants/navigation';

import styles from './styles.module.scss';
import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = ({ type }) => {
  const pathName = usePathname();

  const { t } = useMyTranslation();

  const navigationLinks =
    type === 'header' ? headerNavigation : footerNavigation;

  const withActive = type === 'header';

  return (
    <nav className={styles.navigation}>
      {navigationLinks.map(({ label, href }) => {
        const isActive =
          withActive && pathName.replace(/ru(\/)?|en(\/)?/, '') === href; // compare '/ru' and '/en'
        return (
          <Link
            key={label}
            href={`${href}`}
            className={isActive ? styles.active : ''}
          >
            {t(label)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
