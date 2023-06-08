import { usePathname } from 'next/navigation';

import en from '@/app/i18n/locales/en/translation.json';
import ru from '@/app/i18n/locales/ru/translation.json';

export interface ITranslation {
  ru: { [key: string]: string };
  en: { [key: string]: string };
}

const TRANSLATIONS: ITranslation = { en, ru };

export function useMyTranslation() {
  const router = usePathname();

  let locale: keyof ITranslation = 'en';
  if (router && router.includes('ru')) locale = 'ru';

  const t = (keyString: string) => TRANSLATIONS[locale][keyString];

  return { t };
}

export const serverTranslation = (lng: keyof ITranslation) => ({
  t: (keyString: string) => TRANSLATIONS[lng][keyString],
});
