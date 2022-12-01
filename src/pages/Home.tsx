import { useConfig } from '@context/ConfigurationContext';
import React from 'react';

interface HomeProps {}

const classes = {
  title: 'text-3xl font-bold text-white',
};

const Home: React.FC<HomeProps> = () => {
  const { translatorAdapter } = useConfig();
  const t = translatorAdapter.translate();

  return (
    <div>
      <h1 className={classes.title}>{t('dashboard.title')}</h1>
    </div>
  );
};

export default Home;
