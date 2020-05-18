import React from 'react';
import { render } from '@testing-library/react';
import Breadcumbs from './Breadcumbs';

describe('Renders breadcumbs', () => {
    it('Should render breadcumbs without crashing', () => {
        const categories = ['1', 'Two', '3'];
        render(<Breadcumbs categories={categories} />);
    });
});