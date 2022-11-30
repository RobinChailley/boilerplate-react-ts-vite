import { useConfig } from '@context/ConfigurationContext';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarLinkProps {
    alt: string;
    icon: string;
    title: string;
    to: string;
}

const classes = {
    container: 'atom',
    link: 'text-base p-2 flex items-center dark:text-white rounded hover:bg-gray-700',
    img: 'h-5 w-5',
    text: 'ml-4',
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
    alt,
    icon,
    title,
    to,
}) => {
    const { translatorAdapter } = useConfig();
    const t = translatorAdapter.translate();

    return (
        <li className={classes.container}>
            <NavLink
                to={to}
                className={classes.link}
            >
                <img className={classes.img} src={icon} alt={alt}/>
                <span className={classes.text}>{t(title)}</span>
            </NavLink>
        </li>
    );
};

export default SidebarLink;
