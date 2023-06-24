import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Pagination from '.';

describe('Pagination component', () => {
    const onPageChangeMock = jest.fn();

    beforeEach(() => {
        onPageChangeMock.mockClear();
    });

    it('renders previous and next buttons', () => {
        render(
            <Pagination currentPage={1} totalPages={10} onPageChange={onPageChangeMock}/>
        );

        const prevButton = screen.getByText('Prev');
        const nextButton = screen.getByText('Next');

        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    it('disables previous button on first page', () => {
        render(
            <Pagination currentPage={1} totalPages={10} onPageChange={onPageChangeMock}/>
        );

        const prevButton = screen.getByText('Prev');

        expect(prevButton).toBeDisabled();
    });

    it('disables next button on last page', () => {
        const {getByText} = render(
            <Pagination currentPage={10} totalPages={10} onPageChange={onPageChangeMock}/>
        );

        const nextButton = getByText('Next');

        expect(nextButton).toBeDisabled();
    });

    it('calls onPageChange with the previous page number', () => {
        const {getByText} = render(
            <Pagination currentPage={5} totalPages={10} onPageChange={onPageChangeMock}/>
        );

        const prevButton = getByText('Prev');
        fireEvent.click(prevButton);

        expect(onPageChangeMock).toHaveBeenCalledWith(4);
    });

    it('calls onPageChange with the next page number', () => {
        const {getByText} = render(
            <Pagination currentPage={5} totalPages={10} onPageChange={onPageChangeMock}/>
        );

        const nextButton = getByText('Next');
        fireEvent.click(nextButton);

        expect(onPageChangeMock).toHaveBeenCalledWith(6);
    });
});
