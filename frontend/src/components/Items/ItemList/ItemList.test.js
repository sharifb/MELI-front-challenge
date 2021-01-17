import React from 'react';
import { render } from '@testing-library/react';
import ItemList from './ItemList';
import { BrowserRouter } from 'react-router-dom';

describe('Renders NotFound component when list is empty', () => {
    it('Should render list without crashing', () => {
        const { container, getByText } = render(<BrowserRouter><ItemList /></BrowserRouter>);
        const notFoundTitle = getByText('No hay publicaciones que coincidan con tu búsqueda.');
        const NotFound = container.getElementsByClassName('NotFound');

        expect(notFoundTitle).toBeInTheDocument();
        expect(NotFound.length).toBe(1);
    });
});