import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
    
    let itemsList = 'Loading...';

    if(!isLoading) {
        itemsList = 'No se encontraron resultados';
        if(items.length) {
            itemsList = items[0].id;
        }
        if(categories.length) {
            itemsList += categories[0];
        }
    }

    return (
        <div>
            { itemsList }
        </div>
    )
}

export default withRouter(ItemList);