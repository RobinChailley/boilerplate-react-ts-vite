import { useConfig } from '@context/ConfigurationContext';
import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const classes = {
    logout: 'w-full bg-blue-700 rounded-md p-2 text-blue-200',
};

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
}) => {
    const { translatorAdapter } = useConfig();
    const t = translatorAdapter.translate();

    return (
        <button className={classes.logout} onClick={onClick}>
            {t(text)}
        </button>
    );
};

export default Button;
