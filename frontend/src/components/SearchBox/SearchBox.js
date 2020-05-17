import React from 'react';
import classes from './SearchBox.module.css';
import Logo from './Logo/Logo';
import SearchForm from './SearchForm/SearchForm';

const SearchBox = () => {
    return (
        <div className={classes.SearchBox}>
            <Logo />
            <SearchForm />
        </div>
    );
};

export default SearchBox;