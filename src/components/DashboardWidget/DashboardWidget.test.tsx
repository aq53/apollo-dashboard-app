import React from 'react';
import {render, screen} from '@testing-library/react';
import DashboardWidget from '.';

describe('DashboardWidget', () => {
    it('renders the title and count correctly', () => {
        const count = 10;
        const title = 'Number of Posts';

        render(<DashboardWidget count={count} title={title}/>);

        // Assert that the title is rendered correctly
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();

        // Assert that the count is rendered correctly
        const countElement = screen.getByText(count.toString());
        expect(countElement).toBeInTheDocument();
    });
});
