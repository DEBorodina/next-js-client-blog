import { ITranslation } from '@/app/i18n/client';

export interface ILanguage {
  lng: keyof ITranslation;
}

export interface IPage {
  params: ILanguage;
}
export interface Post {
  id: number;
  category: string;
  title: string;
  description: string;
  text: string;
  date: string;
  image: string;
  authorId: number;
  tags: string[];
}
