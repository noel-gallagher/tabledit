import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TableComponent } from './TableComponent';

test('renders a table', () => {
    render(<TableComponent />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument(); 
});

test('renders an empty table', () => {
    render(<TableComponent />);
    const expectedNumberOfRows = 2;
    const numberOfRows = screen.getAllByRole('row').length;
    expect(numberOfRows).toBe(expectedNumberOfRows); 
});
