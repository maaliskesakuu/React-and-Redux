import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//x in front of test hinders this test
xtest('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
