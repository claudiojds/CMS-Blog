import {createNavigation} from 'next-intl/navigation';
import { intl } from '@/config/intl';

 
// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales: intl.locales});
