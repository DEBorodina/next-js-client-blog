import { ILanguage } from '@/app/types';

export interface AuthorHeaderProps extends ILanguage {
  name: string;
  image: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  facebook: string;
  description: string;
}
