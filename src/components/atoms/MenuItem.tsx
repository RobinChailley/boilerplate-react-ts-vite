import { Menu } from '@headlessui/react';
import classNames from '@utils/classNames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItemProps {
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    text,
}) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <NavLink
                    to="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                    {text}
                </NavLink>
            )}
        </Menu.Item>
    );
};

export default MenuItem;
