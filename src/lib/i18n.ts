import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { intlN } from '../../next-intl.config';
// import {intl } from '@/config/intl';

export default getRequestConfig(async ({ locale }) => {
  // Verifica se o idioma está na lista de idiomas suportados
  const resolvedLocale = locale ?? intlN.defaultLocale;
  if (!intlN.locales.includes(resolvedLocale)) notFound();

  return {
    locale: resolvedLocale,
    messages: (await import(`../langs/${resolvedLocale}.json`)).default,
  };
});




