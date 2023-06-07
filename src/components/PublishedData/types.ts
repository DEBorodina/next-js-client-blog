import { ILanguage } from '@/app/types';

export interface PublishedDataProps extends ILanguage {
  name: string;
  id: number;
  date: string;
  color?: 'purple' | 'yellow';
}
