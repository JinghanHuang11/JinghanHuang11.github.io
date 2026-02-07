export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh'] as const,
  paths: {
    en: '',
    zh: '',
  },
};

export type Locale = (typeof i18n)['locales'][number];

export const getLocale = (url: URL): Locale => {
  const locale = url.searchParams.get('lang');
  if (locale === 'en' || locale === 'zh') return locale;
  return i18n.defaultLocale;
};

export const getAllLocales = (): Locale[] => {
  return i18n.locales;
};
