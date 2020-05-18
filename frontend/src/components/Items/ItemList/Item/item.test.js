import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';
import { BrowserRouter } from 'react-router-dom';

describe('Renders item from the list', () => {
    it('Should render item without crashing', () => {
        const item = {
            price: {
                amount: 500,
                currency: 'ARS'
            },
            picture: 'Image',
            title: 'Title',
            id: 'Id',
            free_shipping: true
        }
        render(<BrowserRouter><Item item={item} /></BrowserRouter>);
    });
});