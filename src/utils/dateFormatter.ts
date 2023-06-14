import { ITranslation, serverTranslation } from '@/app/i18n/client';
import { monthNames } from '@/constants/monthNames';

export const formatDate = (lng: keyof ITranslation, date: string) => {
  const { t } = serverTranslation(lng);
  const parsedDate = new Date(date);
  const newDate = `${t(
    monthNames[parsedDate.getMonth()]
  )} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
  return newDate;
};
