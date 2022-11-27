import React from 'react';
import { useTranslation } from 'react-i18next';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className={'text-3xl font-bold underline'}>{t('home.title')}</h1>
        </div>
    );
};

export default Home;
