import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo} from '../../asset/crown.svg'
const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/shop" className="option">
                    Contanct
                </Link>
                <Link to="/signin" className="option">
                    Sign In
                </Link>
                
            </div>
        </div>
    );
};

export default Header;