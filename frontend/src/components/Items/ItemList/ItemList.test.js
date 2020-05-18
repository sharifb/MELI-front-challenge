import React from 'react';
import { render } from '@testing-library/react';
import ItemList from './ItemList';
import { BrowserRouter } from 'react-router-dom';

describe('Renders list items with items', () => {
    it('Should render list without crashing', () => {
        const props = {
            location: {
                search: 'ipod'
            }
        };
        render(<BrowserRouter><ItemList {...props} /></BrowserRouter>);
    });
});