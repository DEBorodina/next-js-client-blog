import { ILanguage } from '@/app/types';

export interface CategorySearchProps extends ILanguage {
  category: string;
  handleClick: (tag: string) => () => void;
  selectedTags: string[];
}
