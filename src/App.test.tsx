import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a table', () => {
  render(<App />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});
