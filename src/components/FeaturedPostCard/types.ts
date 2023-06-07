import { ILanguage } from '@/app/types';

export interface FeaturedPostCardProps extends ILanguage {
  post: {
    authorId: number;
    title: string;
    date: string;
    id: number;
  };
}
