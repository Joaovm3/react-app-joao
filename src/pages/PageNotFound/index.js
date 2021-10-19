import React from 'react';
import { useLocation } from 'react-router';

export default function PageNotFound() {
    const location = useLocation();
    
    return (
        <div>
            <h1> 404 </h1>

            <h2> Oops... Page <code> {location.pathname} </code>  Not Found! </h2>
        </div>
    )
}
