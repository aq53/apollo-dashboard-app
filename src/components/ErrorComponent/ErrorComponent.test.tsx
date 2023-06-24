import React from 'react';
import {render, screen} from '@testing-library/react';
import ErrorComponent from '.';

describe('ErrorComponent', () => {
    it('renders the error message correctly', () => {
        const errorMessage = 'An error occurred';

        render(<ErrorComponent message={errorMessage}/>);

        // Assert that the error message is rendered correctly
        const messageElement = screen.getByText(errorMessage);
        expect(messageElement).toBeInTheDocument();
    });

    it('renders the error image', () => {
        const errorMessage = 'An error occurred';

        render(<ErrorComponent message={errorMessage}/>);

        // Assert that the error image is rendered correctly
        const imageElement = screen.getByAltText('Error');
        expect(imageElement).toBeInTheDocument();
    });
});
