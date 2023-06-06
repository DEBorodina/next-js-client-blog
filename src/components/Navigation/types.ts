import { ILanguage } from '@/app/types';

export interface NavigationProps extends ILanguage {
  type: 'header' | 'footer';
}
