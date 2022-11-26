import React from 'react';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    return (
        <div>
            <h1 className={'text-3xl font-bold underline'}>About</h1>
        </div>
    );
};

export default About;
