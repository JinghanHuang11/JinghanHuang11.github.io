import type { Locale } from './ui';

export function getTranslation(locale: Locale = 'en') {
  return (key: keyof typeof import('./ui').ui.en, params?: Record<string, string | number>) => {
    const ui = await import('./ui');
    let text = ui.ui[locale][key as keyof typeof ui.ui.en] || ui.ui.en[key as keyof typeof ui.ui.en];

    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }

    return text;
  };
}
