import TranslatorAdapterInterface from '@adapters/interfaces/TranslatorAdapterInterface';
import en from '@assets/translations/en.json';
import fr from '@assets/translations/fr.json';
import i18n, { TFunction } from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

class TranslatorAdapter implements TranslatorAdapterInterface {
  setup = async (): Promise<any> => {
    return i18n.use(initReactI18next).init({
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      lng: 'en',
      resources: {
        en: {
          translation: en,
        },
        fr: {
          translation: fr,
        },
      },
    });
  };

  translate = (): TFunction => {
    const { t } = useTranslation();

    return t;
  };
}

export default TranslatorAdapter;
