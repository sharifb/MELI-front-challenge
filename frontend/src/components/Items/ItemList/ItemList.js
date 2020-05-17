import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Item from './Item/Item';
import Spinner from '../../UI/Spinner/Spinner';
import Breadcumbs from '../../UI/Breadcumbs/Breadcumbs';
import classes from './ItemList.module.css';

const ItemList = (props) => {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const query = new URLSearchParams(props.location.search);
    const search = query.get('search');


    const searchItems = useCallback(() => {
        console.log('searching...');
        setIsLoading(true);
        axios.get(`http://localhost:5000/api/items?q=${search}`)
                .then(res => {
                    setItems(res.data.items);
                    setCategories(res.data.categories);
                    setIsLoading(false);
                    console.log(res.data.items);
                })
                .catch(err => {
                    setItems(null);
                    setCategories(null);
                    setIsLoading(false);
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
        itemsList = 'No se encontraron resultados';

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