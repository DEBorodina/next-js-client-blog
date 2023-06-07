import { ILanguage } from '@/app/types';

export interface CategoryHeaderProps extends ILanguage {
  category: {
    name: string;
    description: string;
  };
}
