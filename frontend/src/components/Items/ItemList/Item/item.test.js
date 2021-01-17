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
            picture: 'https://fakeImageUrl.com/12345',
            title: 'iPhone XS',
            id: '12345',
            free_shipping: true
        }

        const { container, getByText } = render(<BrowserRouter><Item item={item} /></BrowserRouter>);
        const title = getByText('iPhone XS');
        const image = container.querySelector('img');
        const link = container.querySelector('a');
        const compoundPrice = getByText('$ 500');

        expect(title).toBeInTheDocument();
        expect(image.getAttribute('src')).toBe('https://fakeImageUrl.com/12345');
        expect(link.getAttribute('href')).toBe('/items/12345');
        expect(compoundPrice).toBeInTheDocument();
    });
});