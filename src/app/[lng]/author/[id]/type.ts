import { ILanguage } from '@/app/types';

export interface AuthorPageProps {
  params: ILanguage & {
    id: number;
  };
}
