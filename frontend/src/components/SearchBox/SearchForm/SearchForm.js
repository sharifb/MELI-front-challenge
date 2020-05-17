import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './SearchForm.module.css';
import searchIcon from '../../../assets/images/search-icon.svg';

const SearchForm = (props) => {
    
    const query = new URLSearchParams(props.location.search);
    const search = query.get('search');
    let initState = '';

    if(search) {
        initState = search;
    }

    const [inputSearch, setInputSearch] = useState(initState);

    const inputChangeHandler = (e) => {
        setInputSearch(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/items?search=${inputSearch}`);
    }
    return (
        <div className={classes.SearchForm}>
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    onChange={inputChangeHandler}
                    value={inputSearch}
                />
                <button>
                    <img src={searchIcon} alt="Search" />
                </button>
            </form>
        </div>
    );
}

export default withRouter(SearchForm);