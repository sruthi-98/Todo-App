import React from 'react';

function Loader() {
    return (
        <div className="loader">
            {[...Array(5)].map(index => (<span></span>))}
        </div>
    )
}

export default Loader;
