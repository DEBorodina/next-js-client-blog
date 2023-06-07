'use client';

import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';
import { ILanguage } from '@/app/types';

const LanguageSwitcher: ({ lng }: ILanguage) => Promise<JSX.Element> = async ({
  lng,
}) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Trans t={t}>{{ lng }} </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => (
          <span key={l}>
            {index > 0 && ' or '}
            <Link href={`/${l}`} key={l}>
              {l}
            </Link>
          </span>
        ))}
    </>
  );
};

export default LanguageSwitcher;
