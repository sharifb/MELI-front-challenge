import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';
import { BrowserRouter } from 'react-router-dom';

describe('Renders the search form', () => {
    it('Should search form and change the uri', () => {
        const props = {
            location: {
                search: 'laptop'
            }
        }

        const { container } = render(<BrowserRouter><SearchForm {...props} /></BrowserRouter>);
        const form = container.querySelector('form');
        const input = container.querySelector('input');

        const newInputValue = 'iPhone';

        fireEvent.change(input, { target: { value: newInputValue } });
        expect(input.value).toBe(newInputValue);

        fireEvent.submit(form);
        expect(global.window.location.search).toEqual(`?search=${newInputValue}`);
    });
});