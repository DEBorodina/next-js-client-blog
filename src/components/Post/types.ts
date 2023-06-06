import { ILanguage } from '@/app/types';

export interface PostProps extends ILanguage {
  post: {
    category: string;
    image: string;
    title: string;
    date: string;
    authorId: number;
    text: string;
  };
}
