import React from 'react';
import meliLogo from '../../../assets/images/meli-logo.png';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={meliLogo} alt="MeliLogo" />
        </div>
    );
}

export default Logo;