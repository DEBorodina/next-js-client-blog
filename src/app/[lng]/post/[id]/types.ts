import { ILanguage } from '@/app/types';

export interface PostPageProps {
  params: ILanguage & {
    id: number;
  };
}
