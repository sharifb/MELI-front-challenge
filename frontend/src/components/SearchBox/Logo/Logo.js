import React from 'react';
import meliLogo from '../../../assets/images/meli-logo.png';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <Link to="/"><img src={meliLogo} alt="MeliLogo" /></Link>
        </div>
    );
}

export default Logo;