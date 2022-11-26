import MenuButton from '@components/atoms/MenuButton';
import MenuItem from '@components/atoms/MenuItem';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

const ProfileDropdown: React.FC = () => {
    return (
        <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton alt={'menu-btn'}/>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-90"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-30"
            >
                <Menu.Items
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem text={'Your Profile'}/>
                    <MenuItem text={'Settings'}/>
                    <MenuItem text={'Sign out'}/>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ProfileDropdown;
