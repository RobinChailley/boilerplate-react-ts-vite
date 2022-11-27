import en from '@assets/translations/en.json';
import fr from '@assets/translations/fr.json';
import i18n, { TFunction } from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

class TranslatorAdapter {
    setup = async (): Promise<any> => {
        return i18n.use(initReactI18next).init({
            fallbackLng: 'fr',
            interpolation: {
                escapeValue: false,
            },
            lng: 'fr',
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
