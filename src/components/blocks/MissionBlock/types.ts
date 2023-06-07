import { ILanguage } from '@/app/types';

export interface MissionBlockProps extends ILanguage {
  type: 'main' | 'about';
}
