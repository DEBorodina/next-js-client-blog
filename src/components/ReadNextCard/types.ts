import { ILanguage } from '@/app/types';

export interface ReadNextCardProps extends ILanguage {
  post: {
    title: string;
    description: string;
    authorId: number;
    image: string;
    date: string;
    id: number;
  };
}
