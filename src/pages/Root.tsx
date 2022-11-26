import React from 'react';
import { Outlet } from 'react-router-dom';

interface RootProps {

}

const Root: React.FC<RootProps> = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;
