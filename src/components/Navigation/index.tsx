'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { footerNavigation, headerNavigation } from '@/constants/navigation';

import styles from './styles.module.scss';
import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = ({ type }) => {
  const pathName = usePathname();

  const navigationLinks =
    type === 'header' ? headerNavigation : footerNavigation;

  const withActive = type === 'header' ? true : false;

  return (
    <nav className={styles.navigation}>
      {navigationLinks.map(({ label, href }) => {
        const isActive = withActive && pathName === href;
        return (
          <Link
            key={label}
            href={href}
            className={isActive ? styles.active : ''}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
