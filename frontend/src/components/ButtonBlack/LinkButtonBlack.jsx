import React from "react";
import {Link} from 'react-router-dom';
import './LinkButtonBlack.css';

const LinkButtonBlack = ({to, children}) => {
    return (
        <Link to={to} className="buttonBlack">{children}</Link>
    );
};

export default LinkButtonBlack;