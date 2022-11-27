import Navbar from '@components/organisms/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface RootProps {

}

const Root: React.FC<RootProps> = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;
