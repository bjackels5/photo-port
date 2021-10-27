import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })
})

it('correct title', () => {
    const { getByTestId } = render(<Contact/>);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
})

it('Submit button', () => {
    const { getByTestId } = render(<Contact/>);
    expect(getByTestId('submit')).toHaveTextContent('Submit');

})
