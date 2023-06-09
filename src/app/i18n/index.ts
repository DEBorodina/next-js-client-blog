import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getOptions } from './settings';

const initI18next = async (lng: 'ru' | 'en', ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: 'ru' | 'en',
  ns = 'translation',
  options = { keyPrefix: '' }
) {
  const i18nextInstance = await initI18next(lng, ns);
  const keyPref = options?.keyPrefix!;
  return {
    // @ts-ignore
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, keyPref),
    i18n: i18nextInstance,
  };
}
