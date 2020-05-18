import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './SearchForm.module.css';
import searchIcon from '../../../assets/images/search-icon.svg';
import Logo from '../Logo/Logo';

const SearchForm = (props) => {

    const inputSearchRef = useRef();

    const query = new URLSearchParams(props.location.search);
    const search = query.get('search');

    let initValue = search || '';

    const [inputSearch, setInputSearch] = useState('');
    
    useEffect(() => {
        setInputSearch(initValue);
        inputSearchRef.current.focus();
    }, [setInputSearch, initValue]);

    const inputChangeHandler = (e) => {
        setInputSearch(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(inputSearch) {
            props.history.push(`/items?search=${inputSearch}`);
        }
    }
    return (
        <div className={classes.SearchForm}>
            <Logo />
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    onChange={inputChangeHandler}
                    value={inputSearch}
                    ref={inputSearchRef}
                />
                <button>
                    <img src={searchIcon} alt="Search" />
                </button>
            </form>
        </div>
    );
}

export default withRouter(SearchForm);