import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Breadcumbs from '../../UI/Breadcumbs/Breadcumbs';
import Spinner from '../../UI/Spinner/Spinner';
import axios from 'axios';
import classes from './ItemDescription.module.css';
import NotFound from '../NotFound/NotFound';
import { formatAsCurrency } from '../../../utils/helpers';

const ItemDescription = (props) => {

    const [item, setItem] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = props.match.params;

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:5000/api/items/${id}`)
                .then(res => {
                    setItem(res.data.item);
                    setCategories(res.data.item.categories);
                    setIsLoading(false);
                })
                .catch(err => {
                    setItem(null);
                    setCategories(null);
                    setIsLoading(false);
                });
    }, [id]);

    const getPrice = (p) => {
        let price = '';
        if(p.currency === 'ARS') {
            price = '$ ';
        } else if (p.currency === 'USD') {
            price = 'U$D ';
        }
        price += formatAsCurrency(p.amount);
        return price;
    }

    let iDescription = <Spinner />;
    let breadcumbs = null;

    if(!isLoading) {
        iDescription = <NotFound origin="item" />;

        if(categories && categories.length) {
            breadcumbs = <Breadcumbs categories={categories} />
        }

        if(item) {
            iDescription = (
                <div className={classes.ItemDescription}>
                    <div className={classes.ItemDescriptionContainer}>
                        <div className={classes.ItemDescriptionImage}>
                            <img src={item.picture} alt="ItemImage"></img>
                        </div>
                        <div className={classes.ItemDescriptionBox}>
                            <ul>
                                <li className={classes.Condition}>
                                    { (item.condition === 'new') ? 'Nuevo' : 'Usado' }
                                    { item.sold_quantity ? ` - ${item.sold_quantity} Vendidos` : '' }
                                </li>
                                <li className={classes.Title}>{item.title}</li>
                                <li className={classes.Price}>
                                    {getPrice(item.price)}
                                    <span>{('0' + item.price.decimals).slice(-2)}</span>
                                </li>
                                { item.free_shipping ? <li className={classes.Shipping}>Envío gratis</li> : null }
                                <li><button>Comprar</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.ItemDescriptionDescription}>
                        <h1>Descripción del producto</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            { breadcumbs }
            { iDescription }
        </div>
    )
}

export default withRouter(ItemDescription);