import { CloseIcon } from '@assets/html-svg';
import { useConfig } from '@context/ConfigurationContext';
import Badge from '@presentation/atoms/Badge';
import React from 'react';

interface ClosableCardProps {
  id: string;
  badgeText: string;
  text: string;
  ctaText: string;
  ctaHref: string;
}

const classes = {
  container: 'molecule p-4 mt-6 rounded-lg bg-blue-900',
  button:
    'ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800',
  ctaText: 'text-sm underline text-blue-400 hover:text-blue-300',
  text: 'mb-3 text-sm text-blue-400',
  topRow: 'flex items-center mb-3',
};

const ClosableCard: React.FC<ClosableCardProps> = ({
  id,
  badgeText,
  ctaHref, ctaText, text,
}) => {
  const { translatorAdapter } = useConfig();
  const t = translatorAdapter.translate();

  return (
    <div id={id} className={classes.container} role="alert">
      <div className={classes.topRow}>
        <Badge text={badgeText} />
        <button type="button" className={classes.button} data-collapse-toggle={id}>
          <CloseIcon />
        </button>
      </div>
      <p className={classes.text}>{t(text)}</p>
      <a className={classes.ctaText} href={ctaHref}>
        {t(ctaText)}
      </a>
    </div>
  );
};

export default ClosableCard;
