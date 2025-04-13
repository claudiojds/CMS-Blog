// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { notFound } from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
// import { intl } from '../config/intl';


 
// export default getRequestConfig(async ({Locale}) => {
//   if (!intl.locales.includes(Locale as any)) notFound();

//   return {
//     messages: (await import(`../langs/${Locale}.json`)).default
//   };
// });

import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import { intl } from '../config/intl';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(intl.locales, requested)
    ? requested
    : intl.defaultLocale;
 
  return {
    locale,
    // messages: (await import(`../../messages/${locale}.json`)).default,
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});