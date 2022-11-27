import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className={'text-3xl font-bold underline'}>{t('about.title')}</h1>
        </div>
    );
};

export default About;
