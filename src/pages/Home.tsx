import React from 'react';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            <h1 className={'text-3xl font-bold underline'}>Home</h1>
        </div>
    );
};

export default Home;
