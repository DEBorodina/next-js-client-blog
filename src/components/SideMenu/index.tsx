import React, { forwardRef } from 'react';

import HeaderMenu from '../HeaderMenu';
import styles from './styles.module.scss';
import { SideMenuProps } from './types';

const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(
  ({ setIsOpen }, ref) => (
    <div className={styles.sidemenu} ref={ref}>
      <HeaderMenu setIsOpen={setIsOpen} />
    </div>
  )
);

export default SideMenu;
