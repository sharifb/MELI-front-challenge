import React from 'react';
import classes from './Breadcumbs.module.css';

const Breadcumbs = (props) => {
    return (
        <div className={classes.Breadcumbs}>
            {props.categories.map((category, i) => {
                if(i + 1 === props.categories.length) {
                    return <strong key={i}>{category}</strong>;
                } else {
                    return category + ' > ';
                }
            })}
        </div>
    )
}

export default Breadcumbs;