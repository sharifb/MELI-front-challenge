import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from './SearchForm';
import { BrowserRouter } from 'react-router-dom';

describe('Renders the search form', () => {
    it('Should search form without crashing', () => {
        const props = {
            location: {
                search: 'laptop'
            }
        }
        render(<BrowserRouter><SearchForm {...props} /></BrowserRouter>);
    });
});