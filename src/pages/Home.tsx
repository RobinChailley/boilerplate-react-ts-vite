import { useConfig } from '@context/ConfigurationContext';
import React from 'react';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const { translatorAdapter } = useConfig();
    const t = translatorAdapter.translate();

    return (
        <div>
            <h1 className={'text-3xl font-bold underline'}>{t('home.title')}</h1>
        </div>
    );
};

export default Home;
