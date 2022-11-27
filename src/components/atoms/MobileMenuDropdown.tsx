import { Disclosure } from '@headlessui/react';
import classNames from '@utils/classNames';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface MobileMenuDropdownProps {
    navigation: {
        name: string;
        href: string;
    }[]
}

const MobileMenuDropdown: React.FC<MobileMenuDropdownProps> = ({
    navigation,
}) => {
    const { pathname } = useLocation();

    return (
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium',
                        )}
                        aria-current={pathname === item.href ? 'page' : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel>
    );
};

export default MobileMenuDropdown;
