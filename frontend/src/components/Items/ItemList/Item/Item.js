import React from 'react';
import classes from './Item.module.css';

const Item = (props) => {
    return (
        <div className={classes.Item}>
            <img src={props.item.picture} alt="Item" />
        </div>
    )
};

export default Item;