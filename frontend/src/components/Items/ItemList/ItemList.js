import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios-orders/back-api';
import Item from './Item/Item';
import Spinner from '../../UI/Spinner/Spinner';
import Breadcumbs from '../../UI/Breadcumbs/Breadcumbs';
import classes from './ItemList.module.css';
import NotFound from '../NotFound/NotFound';

const ItemList = (props) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const query = new URLSearchParams(props.location.search);
    const search = query.get('search');


    const searchItems = useCallback(() => {
        setIsLoading(true);
        axios.get(`/api/items?q=${search}`)
                .then(res => {
                    setIsLoading(false);
                    setItems(res.data.items);
                    setCategories(res.data.categories);
                })
                .catch(err => {
                    setIsLoading(false);
                    setItems(null);
                    setCategories(null);
                });
    }, [search]);

    useEffect(() => {
        if(search) {
            searchItems();
        }
    }, [search, searchItems]);
    
    let itemsList = <Spinner />;
    let breadcumbs = null;

    if(!isLoading) {
        itemsList = <NotFound origin="search" />;

        if(categories && categories.length) {
            breadcumbs = <Breadcumbs categories={categories} />
        }

        if(items.length) {
            itemsList = (<div
                className={classes.ItemList}>
                    <ul>
                        {items.map(i => <li key={i.id}><Item item={i} /></li>)}
                    </ul>
                </div>);
        }
    }

    return (
        <div>
            { breadcumbs }
            { itemsList }
        </div>
    )
}

export default withRouter(ItemList);