import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct heading', () => {
  render(<App />);
  
  // Update the text to match what actually appears in your App.js
  const headingElement = screen.getByText(/Dilshan Gamage/i);
  
  expect(headingElement).toBeInTheDocument();
});
