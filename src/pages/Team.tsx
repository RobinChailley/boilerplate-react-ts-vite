import React from 'react';
import { useTranslation } from 'react-i18next';

interface TeamProps {

}

const Team: React.FC<TeamProps> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className={'text-3xl font-bold underline'}>{t('team.title')}</h1>
        </div>
    );
};

export default Team;
