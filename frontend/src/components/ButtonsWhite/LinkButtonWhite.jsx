import React from "react";
import {Link} from 'react-router-dom';
import './LinkButtonWhite.css';

const LinkButtonWhite = ({to, children}) => {
    return (
        <Link to={to} className="buttonWhite">{children}</Link>
    );
};

export default LinkButtonWhite;