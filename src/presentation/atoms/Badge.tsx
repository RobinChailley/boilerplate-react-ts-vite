import { useConfig } from '@context/ConfigurationContext';
import React from 'react';

interface BadgeProps {
  text: string;
}

const classes = {
  container: 'atom text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-orange-200 text-orange-900',
};

const Badge: React.FC<BadgeProps> = ({ text }) => {
  const { translatorAdapter } = useConfig();
  const t = translatorAdapter.translate();

  return <span className={classes.container}>{t(text)}</span>;
};

export default Badge;
