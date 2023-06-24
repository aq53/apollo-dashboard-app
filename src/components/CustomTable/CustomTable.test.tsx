import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import CustomTable from '.';

describe('CustomTable component', () => {
    const columns = [
        {key: 'name', label: 'Name'},
        {key: 'email', label: 'Email'},
        {key: 'phone', label: 'Phone'}
    ];

    const rows = [
        {name: 'User A', email: 'userA@example.com', phone: '123-456-7890'},
        {name: 'User B', email: 'userB@example.com', phone: '987-654-3210'},
        {name: 'User C', email: 'userC@example.com', phone: '555-123-4567'}
    ];

    const onClickRowMock = jest.fn();

    beforeEach(() => {
        onClickRowMock.mockClear();
    });

    it('renders the table with columns and rows', () => {
        render(
            <CustomTable columns={columns} rows={rows} isLoading={false} onClickRow={onClickRowMock}/>
        );

        const nameColumn = screen.getByText('Name');
        const emailColumn = screen.getByText('Email');
        const phoneColumn = screen.getByText('Phone');

        expect(nameColumn).toBeInTheDocument();
        expect(emailColumn).toBeInTheDocument();
        expect(phoneColumn).toBeInTheDocument();

        const userARow = screen.getByText('User A');
        const userBRow = screen.getByText('User B');
        const userCRow = screen.getByText('User C');

        expect(userARow).toBeInTheDocument();
        expect(userBRow).toBeInTheDocument();
        expect(userCRow).toBeInTheDocument();
    });

    it('calls onClickRow when a row is clicked', () => {
        render(
            <CustomTable columns={columns} rows={rows} isLoading={false} onClickRow={onClickRowMock}/>
        );

        const userARow = screen.getByText('User A');
        fireEvent.click(userARow);

        expect(onClickRowMock).toHaveBeenCalledWith(rows[0]);
    });

    it('displays loader when isLoading is true', () => {
        render(
            <CustomTable columns={columns} rows={rows} isLoading={true} onClickRow={onClickRowMock}/>
        );

        const loader = screen.getByTestId('loader');

        expect(loader).toBeInTheDocument();
    });


});
