import { ITranslation } from '@/app/i18n/client';

export interface ILanguage {
  lng: keyof ITranslation;
}

export interface IPage {
  params: ILanguage;
}
