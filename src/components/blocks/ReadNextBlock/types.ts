import { ILanguage } from '@/app/types';

export interface ReadNextProps extends ILanguage {
  category: string;
  postId: number;
}
