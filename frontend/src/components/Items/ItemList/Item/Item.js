import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Item.module.css';
import { formatAsCurrency } from '../../../../utils/helpers';
import shippingIcon from '../../../../assets/images/free-shipping.png';

const Item = (props) => {
    const getPrice = () => {
        let price = '';
        if(props.item.price.currency === 'ARS') {
            price = '$ ';
        } else if (props.item.price.currency === 'USD') {
            price = 'U$D ';
        }
        price += formatAsCurrency(props.item.price.amount);
        return price;
    }

    const link = `/items/${props.item.id}`;

    return (
        <div className={classes.Item}>
            <div className={classes.ItemImage}>
                <Link to={link}><img src={props.item.picture} alt="Item" /></Link>
            </div>
            <div className={classes.ItemCol}>
                <div>
                    {getPrice()}
                    { props.item.free_shipping ? <img src={shippingIcon} alt="FreeShipping"></img> : null}
                </div>
                <Link to={link}><div>{props.item.title}</div></Link>
            </div>
        </div>
    )
};

export default Item;