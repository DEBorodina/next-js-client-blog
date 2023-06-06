'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { usePopup } from '@/hooks';

import styles from './styles.module.scss';
import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({ children, setOpen }) => {
  const [ref, isOpenPopUp] = usePopup(true);

  useEffect(() => {
    setOpen(isOpenPopUp);
  }, [isOpenPopUp, setOpen]);

  return createPortal(
    isOpenPopUp && (
      <div className={styles.overlay}>
        <div
          className={styles.modal}
          ref={ref as React.RefObject<HTMLDivElement>}
          aria-label="modal"
        >
          {children}
        </div>
      </div>
    ),
    document.getElementById('portal')!
  );
};
