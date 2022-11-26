import React from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorProps {

}

const Error: React.FC<ErrorProps> = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default Error;
