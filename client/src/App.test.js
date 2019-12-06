import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
 
  render(<App />);
 
});


test ('Is there a toggle?', () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/toggle/i);
})


test ('Is there a player?', () => {
  const { findByText } = render(<App />);

  findByText(/player/i);
})


test ('Is there an image', () => {
  const { findByText } = render(<App />);

  findByText(/image/)
})


