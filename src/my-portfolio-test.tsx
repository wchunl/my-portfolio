import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import MyPortfolio from './my-portfolio';

test('renders learn react link', () => {
  const { getByText } = render(<MyPortfolio />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
