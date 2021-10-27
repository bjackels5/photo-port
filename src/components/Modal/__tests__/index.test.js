import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const mockToggleModal = jest.fn();


afterEach(cleanup);

const currentPhoto = {
    name: "Park bench",
    category: 'landscape',
    description: 'jflsjljaopi jfoaji asdjfoiuhjwjwerjmcvosi',
    index: 1
}

describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });

  it('renders', () => {
    const { asFragment } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />)
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
        fireEvent.click(getByText('Close'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });    
})