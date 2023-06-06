import { ILanguage } from '@/app/types';

export interface CategoryPageProps {
  params: ILanguage & {
    name: string;
  };
}
