import React from 'react';
import classes from './NotFound.module.css';

const NotFound = (props) => {
    let message = (<h3>No se encontró el elemento buscado.</h3>);
    if (props.origin === 'search') {
        message = (
            <div>
                <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
                <ul>
                    <li>Revisá la ortografía de la palabra.</li>
                    <li>Utilizá palabras más genéricas o menos palabras.</li>
                </ul>
            </div>
        );
    }
    return (
        <div className={classes.NotFound}>
            {message}
        </div>
    )
}

export default NotFound;