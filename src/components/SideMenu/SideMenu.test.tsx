import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import SideMenu from '.';

describe('SideMenu component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it('renders the menu items', () => {
        render(<SideMenu isCompact={false} navigate={mockNavigate}/>);

        const dashboardItem = screen.getByText('Dashboard');
        const usersItem = screen.getByText('Users');
        const postsItem = screen.getByText('Posts');

        expect(dashboardItem).toBeInTheDocument();
        expect(usersItem).toBeInTheDocument();
        expect(postsItem).toBeInTheDocument();
    });

    it('calls navigate with the correct path when a menu item is clicked', () => {
        render(<SideMenu isCompact={false} navigate={mockNavigate}/>);

        const dashboardItem = screen.getByText('Dashboard');
        fireEvent.click(dashboardItem);

        expect(mockNavigate).toHaveBeenCalledWith('/');

        const usersItem = screen.getByText('Users');
        fireEvent.click(usersItem);

        expect(mockNavigate).toHaveBeenCalledWith('/users');

        const postsItem = screen.getByText('Posts');
        fireEvent.click(postsItem);

        expect(mockNavigate).toHaveBeenCalledWith('/posts');
    });
});
