import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtetctedRoute({ component }) {
    const userId = localStorage.getItem('userId');
    const Component = component;

    return (
        <div>
           {userId ? <Component /> : <Redirect to={{ pathname: '/login' }} />} 
        </div>
    )
}

export default ProtetctedRoute;
