import createMiddleware from 'next-intl/middleware';
import { intl } from './config/intl';

 
export default createMiddleware({
    locales: intl.locales,
    defaultLocale: intl.defaultLocale,
    localeDetection: false,
});
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};