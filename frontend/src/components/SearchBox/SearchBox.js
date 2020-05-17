import React from 'react';
import classes from './SearchBox.module.css';
import SearchForm from './SearchForm/SearchForm';

const SearchBox = () => {
    return (
        <div className={classes.SearchBox}>
            <SearchForm />
        </div>
    );
};

export default SearchBox;