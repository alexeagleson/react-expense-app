import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div>
        404!
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFound;